import { EmailTemplate } from "@/components/Template";
import { Resend } from "resend";
import { NextRequest } from "next/server";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MIN_SUBMIT_TIME_MS = 3000;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

interface EmailData {
  from: string;
  to: string[];
  subject: string;
  react: React.ReactNode;
  replyTo: string;
  attachments?: { filename: string; content: Buffer }[];
}

const getClientIp = (request: NextRequest) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim();
  }

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
};

const isRateLimited = (key: string) => {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || entry.resetAt <= now) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const service = formData.get("service") as string;
    const honeypot = formData.get("company") as string | null;
    const startedAt = Number(formData.get("form_started_at"));

    if (honeypot) {
      return Response.json({ ok: true });
    }

    if (!Number.isFinite(startedAt)) {
      return Response.json(
        { error: "Invalid form submission." },
        { status: 400 }
      );
    }

    if (Date.now() - startedAt < MIN_SUBMIT_TIME_MS) {
      return Response.json(
        { error: "Form submitted too quickly." },
        { status: 400 }
      );
    }

    if (!name || !email || !phone || !address || !service) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailData: EmailData = {
      from: "Contact Form <danny@a-bby.com>",
      to: ["Danny@a-bby.com"],
      subject: `New Contact Form Submission from ${name}`,
      react: EmailTemplate({
        name,
        email,
        phone,
        address,
        service,
      }),
      replyTo: email,
    };

    // Handle multiple file attachments
    const attachmentEntries = formData.getAll("attachment");
    if (attachmentEntries.length > 0) {
      emailData.attachments = [];

      for (const entry of attachmentEntries) {
        if (entry instanceof File) {
          const bytes = await entry.arrayBuffer();
          const buffer = Buffer.from(bytes);

          emailData.attachments.push({
            filename: entry.name,
            content: buffer,
          });
        }
      }
    }

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}

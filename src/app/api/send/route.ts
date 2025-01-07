import { EmailTemplate } from "@/components/Template";
import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Get the form data
    const formData = await request.formData();

    // Extract file and other fields
    const file = formData.get("attachment") as File | null;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const service = formData.get("service") as string;

    // Validate required fields
    if (!name || !email || !phone || !address || !service) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Prepare email data
    const emailData: any = {
      from: "Contact Form <onboarding@resend.dev>",
      to: ["siggersd@gmail.com"],
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

    // If there's a file attachment, process it
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      emailData.attachments = [
        {
          filename: file.name,
          content: buffer,
        },
      ];
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

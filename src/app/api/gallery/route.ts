import { NextResponse } from "next/server";

export async function GET() {
  try {
    const images = Array.from({ length: 52 }, (_, i) => {
      const number = i + 1;
      return {
        id: String(number),
        src: `/gallery/${number}.jpg`,
        alt: `Landscaping project ${number}`,
        width: 1080,
        height: 1920,
      };
    });

    return NextResponse.json({ images, total: images.length });
  } catch (error) {
    console.error("Error loading gallery:", error);
    return NextResponse.json(
      { error: "Failed to load gallery" },
      { status: 500 }
    );
  }
}

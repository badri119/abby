import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "", // Replace with your actual image paths
    width: 142,
    height: 260,
    alt: "A-BBY Landscape work example 1",
  },
  {
    src: "",
    width: 290,
    height: 260,
    alt: "A-BBY Landscape work example 2",
  },
  {
    src: "",
    width: 153,
    height: 260,
    alt: "A-BBY Landscape work example 3",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Introduction Text */}
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-center text-lg text-gray-700">
          A-BBY Landscape, established in 2008, offers reliable landscaping
          services in Burnaby, BC and surrounding areas. With 22 years of
          experience, they specialize in residential and commercial maintenance,
          yard makeovers, tree pruning, hedge trimming, and much more.
          Owner-operated and dedicated to client satisfaction, they aim to
          create and maintain beautiful outdoor spaces.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-4 gap-4 mb-12">
        {/* First Image */}
        <div className="col-span-1">
          <div className="relative h-[260px]">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Middle Image (Larger) */}
        <div className="col-span-2">
          <div className="relative h-[260px]">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Last Image */}
        <div className="col-span-1">
          <div className="relative h-[260px]">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-lg text-gray-700">
          The distance between our dreams and reality is action,{" "}
          <Link
            href="/contact"
            className="text-green-600 hover:text-green-700 underline transition-colors"
          >
            contact us
          </Link>{" "}
          now.
        </p>
      </div>
    </main>
  );
}

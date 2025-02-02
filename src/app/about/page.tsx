import Image from "next/image";
import Link from "next/link";
import Guitar from "../../../public/guitar.jpg";
import Pebbles from "../../../public/pebbles.jpg";
import Danny from "../../../public/Danny-big.jpg";
import Working from "../../../public/working.jpg";

const images = [
  {
    src: Danny,
    width: 142,
    height: 260,
    alt: "Danny",
  },
  {
    src: Pebbles,
    width: 142,
    height: 260,
    alt: "A-BBY Landscape work example 1",
  },
  {
    src: Working,
    width: 290,
    height: 260,
    alt: "A-BBY Landscape work example 2",
  },
  {
    src: Guitar,
    width: 153,
    height: 260,
    alt: "A-BBY Landscape work example 3",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="px-4 ">
        {/* Hero Image */}
        <div className="w-full flex justify-center mb-8 sm:mb-12">
          <div className="relative w-full sm:w-8/12 md:w-6/12 h-64 sm:h-96">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
          <p className="text-center text-base sm:text-lg text-gray-700">
            A-BBY Landscape, established in 2008, offers reliable landscaping
            services in Burnaby, BC and surrounding areas. With 22 years of
            experience, they specialize in residential and commercial
            maintenance, yard makeovers, tree pruning, hedge trimming, and much
            more. Owner-operated and dedicated to client satisfaction, they aim
            to create and maintain beautiful outdoor spaces.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:mb-12">
          {/* First Image */}
          <div className="lg:col-span-1">
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Middle Image (Larger) */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover object-bottom rounded-lg"
              />
            </div>
          </div>

          {/* Last Image */}
          <div className="lg:col-span-1">
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-base md:text-lg text-gray-700">
          The distance between our dreams and reality is action
          <br />
          <Link
            href="/contact"
            className="text-green-600 hover:text-green-700 underline transition-colors"
          >
            contact us
          </Link>{" "}
          now
        </p>
      </div>
    </main>
  );
}

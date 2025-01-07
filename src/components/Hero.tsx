import React from "react";
import Image from "next/image";
import AbbyLandingImage from "../../public/landing.png";

interface Quote {
  text: string;
  author: string;
}

const quote: Quote = {
  text: "Working with plants, trees, fences and walls, if they practice sincerely they will attain enlightenment.",
  author: "Dogen Zenji",
};

const services = [
  "Commercial / Industrial Site Maintenance",
  "Residential Maintenance, monthly/quarterly/biannual",
  "Residential Yard Makeovers",
];

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Image */}
        <div className="relative w-full flex justify-center overflow-hidden mb-12">
          <div className="h-[700px] rounded-3xl overflow-hidden">
            <Image
              src={AbbyLandingImage}
              alt="A-BBY Landscape"
              width={600}
              height={600}
              priority
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Introduction Text */}
        <div className="text-center max-w-4xl mx-auto space-y-8 text-black">
          {/* Company Introduction */}
          <p className="text-xl">
            A-BBY Landscape has been a locally owned and operated business since
            2008, proudly situated in Burnaby, B.C.
            <br />
            Offering services to Vancouver, Burnaby, and select areas of New
            Westminster.
          </p>

          {/* Services List */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <p key={index} className="text-xl">
                {service}
              </p>
            ))}
          </div>

          {/* Spacer */}
          <div className="h-8" />

          {/* Quote */}
          <div className="w-full bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <blockquote className="relative bg-white rounded-lg shadow-sm py-8 px-12 w-full">
                <p className="text-2xl italic font-serif text-gray-800 text-center">
                  &quot;{quote.text}&quot;
                </p>
                <footer className="mt-4 text-center">
                  <p className="text-lg text-gray-600">~ {quote.author}</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

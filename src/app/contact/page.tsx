import Image from "next/image";
import flowers1 from "../../../public/flowers.jpg";
import flowers2 from "../../../public/flowers2.jpg";
import flowers3 from "../../../public/flowers3.jpg";
import ContactForm from "@/components/ContactForm";

const images = [
  {
    src: flowers1,
    alt: "Landscaping work example 1",
  },
  {
    src: flowers2,
    alt: "Landscaping work example 2",
  },
  {
    src: flowers3,
    alt: "Landscaping work example 3",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            Let us help bring your outdoor vision to life
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="flex justify-center items-center">
          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Image Grid */}
        <div className="flex justify-center w-full mt-12">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-4 mb-12">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-40 md:h-80 w-28 md:w-60 shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="md:object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

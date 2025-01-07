import Image from "next/image";
import { MapPin, Phone, Mail, Leaf, TreeDeciduous, Home } from "lucide-react";
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            Let us help bring your outdoor vision to life
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h2>

            <div className="flex justify-center md:gap-44 flex-grow">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    4355 Halley Ave.
                    <br />
                    Burnaby B.C.
                    <br />
                    V5G-3C8
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">(604) 657-8636</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <a
                      href="mailto:danny@a-bby.com"
                      className="text-gray-600 hover:text-green-600 rounded-md transition duration-500 hover:scale-110 flex"
                    >
                      danny@a-bby.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Features Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Landscaping Services
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Leaf className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Lawn Care</h4>
                    <p className="text-gray-600">
                      We offer professional lawn care services to ensure your
                      yard looks lush and healthy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <TreeDeciduous className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Tree Pruning</h4>
                    <p className="text-gray-600">
                      We handle tree pruning to maintain healthy growth and
                      aesthetic appeal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Home className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Hedge Trimming
                    </h4>
                    <p className="text-gray-600">
                      We provide precision hedge trimming for clean, polished
                      outdoor spaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

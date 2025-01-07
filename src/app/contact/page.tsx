import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
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

        {/* Image Grid */}
        <div className="flex justify-center w-full mb-12">
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

            <div className="rounded-lg overflow-hidden h-64 bg-gray-100 w-full mt-8">
              <div className="relative w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.6426991978574!2d-123.01267732337206!3d49.24526307340314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676e683962ea9:0x7ef170d192a224a6!2s4355 Halley Ave, Burnaby, BC V5G 3C8!5e0!3m2!1sen!2sca!4v1734732253196!5m2!1sen!2sca"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

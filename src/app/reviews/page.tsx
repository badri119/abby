import React from "react";
import { Star, Leaf, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className=" pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quote Section */}
          <div className="max-w-3xl mx-auto text-center relative mb-16">
            <Quote className="w-16 h-16 text-green-100 mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-gray-600 italic mb-8">
              &quot;Transforming outdoor spaces into beautiful, sustainable
              landscapes. We take pride in every project and value the
              relationships we build with our clients.&quot;
            </p>
            <div className="w-16 h-1 bg-green-600 mx-auto" />
          </div>

          {/* Review CTA */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-2xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Your feedback helps us grow and lets others know about our
              dedication to creating beautiful outdoor spaces. We&apos;d love to
              hear about your experience with A-BBY Landscape.
            </p>

            <Link
              href="https://g.page/r/CZ_tfafO6k9eEB0/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 hover:shadow-xl group"
            >
              <Star className="w-5 h-5 group-hover:animate-pulse" />
              Write a Review on Google
            </Link>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center gap-4">
              <Leaf className="w-6 h-6 text-green-200 rotate-45" />
              <Leaf className="w-6 h-6 text-green-200 -rotate-45" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Thank You for Choosing A-BBY Landscape
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trust in our services means the world to us. We&apos;re
            committed to maintaining the highest standards of quality and
            customer satisfaction in every project we undertake.
          </p>
        </div>
      </section>
    </main>
  );
}

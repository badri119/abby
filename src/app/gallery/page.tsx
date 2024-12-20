"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState, useCallback } from "react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "",
    alt: "Landscaping project 1",
    width: 1080,
    height: 1920,
  },
  // Add other images here
];

export default function GalleryPage() {
  const [loadCount, setLoadCount] = useState(12); // Initial load count

  const loadMore = useCallback(() => {
    setLoadCount((prev) => Math.min(prev + 12, galleryImages.length));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header - Simplified for mobile */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Our Work
          </h1>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            A showcase of our landscaping projects
          </p>
        </div>

        {/* Masonry-style Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {galleryImages.slice(0, loadCount).map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div
                  className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                    index % 3 === 0 ? "row-span-2" : ""
                  }`}
                >
                  <div className="aspect-square sm:aspect-[3/4] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      loading={index < 8 ? "eager" : "lazy"}
                      quality={index < 8 ? 85 : 75}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-3xl h-auto">
                <div className="relative aspect-auto max-h-[80vh]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    quality={90}
                    priority={index < 4}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Load More Button */}
        {loadCount < galleryImages.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

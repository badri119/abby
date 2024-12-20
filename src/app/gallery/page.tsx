"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
    src: "/images/gallery/img-1.jpg",
    alt: "Landscaping project 1",
    width: 1080,
    height: 1920,
  },
  // Add all your images here
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-lg text-gray-600">
            A showcase of our landscaping projects and transformations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[95vw]">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    quality={95}
                    priority
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </main>
  );
}

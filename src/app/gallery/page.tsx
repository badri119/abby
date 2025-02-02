"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loadCount, setLoadCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setGalleryImages(data.images);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load images");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const loadMore = useCallback(() => {
    setLoadCount((prev) => Math.min(prev + 12, galleryImages.length));
  }, [galleryImages.length]);

  const handleImageError = (imageId: string) => {
    setImageError((prev) => ({
      ...prev,
      [imageId]: true,
    }));
    setIsImageLoading(false);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleDialogOpen = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsImageLoading(true);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedImage(null);
    setIsImageLoading(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-green-600/20 border-t-green-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-center">
          <p className="text-xl">Error loading gallery</p>
          <p className="text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Our Work
          </h1>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            A showcase of our landscaping projects
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {galleryImages.slice(0, loadCount).map((image, index) => (
            <Dialog
              key={image.id}
              open={isDialogOpen && selectedImage?.id === image.id}
              onOpenChange={(open) => {
                if (!open) handleDialogClose();
              }}
            >
              <DialogTrigger asChild>
                <div
                  className="relative group cursor-pointer overflow-hidden"
                  onClick={() => handleDialogOpen(image)}
                >
                  <div className="aspect-square sm:aspect-[3/4] relative h-[200px] sm:h-[300px]">
                    {!imageError[image.id] ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        loading={index < 8 ? "eager" : "lazy"}
                        quality={index < 8 ? 85 : 75}
                        onError={() => handleImageError(image.id)}
                        onLoad={handleImageLoad}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">
                          Image not available
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="flex items-center justify-center max-w-[95vw] sm:max-w-4xl mx-auto bg-black/90">
                <DialogTitle className="sr-only">{image.alt}</DialogTitle>
                <DialogDescription className="sr-only">
                  Enlarged view of {image.alt}. Press Escape key or click the
                  close button to exit fullscreen view.
                </DialogDescription>
                <button
                  onClick={handleDialogClose}
                  className="absolute top-4 right-4 z-50 p-2 rounded-md bg-black/50 hover:bg-black/70 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
                <div className="relative w-full h-[80vh] flex items-center justify-center">
                  {selectedImage && (
                    <>
                      {isImageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-md animate-spin" />
                        </div>
                      )}
                      {!imageError[selectedImage.id] ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                            quality={90}
                            priority={true}
                            onError={() => handleImageError(selectedImage.id)}
                            onLoad={handleImageLoad}
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                          <span className="text-gray-400">
                            Image not available
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {loadCount < galleryImages.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors duration-300 shadow-md"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

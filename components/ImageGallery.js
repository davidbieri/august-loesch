import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const images = [
    {
      src: "/api/placeholder/800/600",
      caption: "At Heidegger's chalet on Todtnauberg in the Black Forest, Winter 1929"
    },
    {
      src: "/api/placeholder/800/600",
      caption: "Material from the \"Nachlass Lösch\" in the Stadtarchiv, Heidenheim"
    }
    // Add other images similarly
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img
          src={images[currentSlide].src}
          alt={images[currentSlide].caption}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => setShowLightbox(true)}
          loading="lazy"
        />
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronRight size={24} />
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
          <p className="text-sm">{images[currentSlide].caption}</p>
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {showLightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
             onClick={() => setShowLightbox(false)}>
          <img
            src={images[currentSlide].src}
            alt={images[currentSlide].caption}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

// components/ImageGallery.js
/* global React */

const ImageGallery = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [showLightbox, setShowLightbox] = React.useState(false);

  const images = [
    {
      src: "images/2829WS_HeideggerTodtnauberg_large.JPG",
      caption: "At Heidegger's chalet on Todtnauberg in the Black Forest, Winter 1929"
    },
    {
      src: "images/Schriften_Heidenheim.jpg",
      caption: "Material from the \"Nachlass Lösch\" in the Stadtarchiv, Heidenheim"
    },
    {
      src: "images/LöschPortrait_Heidenheim.jpg",
      caption: "August Lösch (ca. 1936)"
    },
    {
      src: "images/30SS_KeynesOhlin_SchumpeterSeminar.jpg",
      caption: "Lösch's formative encounter with the Keynes-Ohlin debate"
    },
    {
      src: "images/31SS_Gruppe_SchumpeterSeminar.jpg",
      caption: "Group photo of the Schumpeter Seminar (Bonn, SS 1931)"
    }
  ];

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
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
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full 
                     hover:bg-white transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full 
                     hover:bg-white transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
          <p className="text-sm">{images[currentSlide].caption}</p>
        </div>
      </div>

      {/* Thumbnail Navigation */}
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

      {/* Lightbox */}
      {showLightbox && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setShowLightbox(false)}
        >
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

window.ImageGallery = ImageGallery;

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import all images
import notsa1 from '../assets/notsa1.jpg';
import notsa2 from '../assets/notsa2.jpg';
import notsa3 from '../assets/notsa3.jpg';
import notsa4 from '../assets/notsa4.jpg';
import notsa5 from '../assets/notsa5.jpg';
import notsa6 from '../assets/notsa6.jpg';
import notsa7 from '../assets/notsa7.jpg';
import notsa8 from '../assets/notsa8.jpg';
import notsa9 from '../assets/notsa9.jpg';
import notsa10 from '../assets/notsa10.jpg';
import notsa11 from '../assets/notsa11.jpg';
import notsa12 from '../assets/notsa12.jpg';
import notsa13 from '../assets/notsa13.jpg';
import notsa14 from '../assets/notsa14.jpg';
import notsa15 from '../assets/notsa15.jpg';
import notsa16 from '../assets/notsa16.jpg';
import notsa17 from '../assets/notsa17.jpg';
import notsa18 from '../assets/notsa18.jpg';
import notsa19 from '../assets/notsa19.jpg';
import notsa20 from '../assets/notsa20.jpg';
import notsa21 from '../assets/notsa21.jpg';

const images = [
  notsa1, notsa2, notsa3, notsa4, notsa5, notsa6, notsa7, notsa8, notsa9, notsa10,
  notsa11, notsa12, notsa13, notsa14, notsa15, notsa16, notsa17, notsa18, notsa19, notsa20, notsa21
];


export const ImageCarousel = () => {
    const [displayedImageIndex, setDisplayedImageIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
  
      return () => clearInterval(interval);
    }, [displayedImageIndex, isTransitioning]);
  
    const changeImage = (newIndex: number) => {
      if (isTransitioning) return;
      
      setIsTransitioning(true);
      
      // Fade out
      setOpacity(0);
  
      // Change image and fade in after current image has faded out
      setTimeout(() => {
        setDisplayedImageIndex(newIndex);
        setOpacity(1);
        
        // Reset transition state after fade in completes
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 500);
    };
  
    const handleNext = () => {
      if (isTransitioning) return;
      const nextIndex = (displayedImageIndex + 1) % images.length;
      changeImage(nextIndex);
    };
  
    const handlePrev = () => {
      if (isTransitioning) return;
      const prevIndex = (displayedImageIndex - 1 + images.length) % images.length;
      changeImage(prevIndex);
    };
  
    const handleDotClick = (index: number) => {
      if (isTransitioning || index === displayedImageIndex) return;
      changeImage(index);
    };
  
    return (
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden bg-black">
        <img
            src={images[displayedImageIndex]}
            alt={`NOTSA ${displayedImageIndex + 1}`}
            className="absolute w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity }}
        />
  
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white transition-opacity duration-200 hover:bg-black/70 z-10"
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white transition-opacity duration-200 hover:bg-black/70 z-10"
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
  
        {/* Dot Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                displayedImageIndex === index 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => handleDotClick(index)}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    );
  };
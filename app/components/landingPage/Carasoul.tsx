'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import image1 from '../../../public/carasoul images/drew-patrick-miller-_o6AAx9dl_Y-unsplash.jpg';
import image2 from '../../../public/carasoul images/keagan-henman-e6BkcrbCvzs-unsplash.jpg';
import image3 from '../../../public/carasoul images/keagan-henman-iFBIdX54BOk-unsplash.jpg';
import image4 from '../../../public/carasoul images/keagan-henman-jr6P9SoJMNs-unsplash.jpg';
import image5 from '../../../public/carasoul images/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
]

// Import other images similarly

const Gallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="gallery" className="relative w-full" data-carousel="slide">
      <div className="relative h-full overflow-hidden rounded-lg md:h-96">
        {images.map((img, index) => (
          <div
            className={`duration-700 ease-in-out ${index === currentImage ? 'block' : 'hidden'
              }`}
            key={index}
            data-carousel-item
          >
            <Image
              width={1500}
              height={800}
              src={img}
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-gray-300 px-3 py-1 rounded-md"
        onClick={prevImage}
      >
        <FaLessThan/>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-gray-300 px-3 py-1 rounded-md"
        onClick={nextImage}
      >
        <FaGreaterThan/>
      </button>
    </div>

  );
};

export default Gallery;

'use client'
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  '/carasoul images/pexels-andrea-piacquadio-3760067.jpg',
  '/carasoul images/pexels-ekaterina-bolovtsova-4049960.jpg',
  '/carasoul images/pexels-shvets-production-7176026 (3).jpg',
  '/carasoul images/keagan-henman-jr6P9SoJMNs-unsplash.jpg',
  '/carasoul images/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg',
];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='relative'>
      <div className='relative'>
        <Image
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          layout='responsive'
          width={120}
          height={600}
          className='rounded-lg'
        />
        <button
          onClick={prevImage}
          className='absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl focus:outline-none'
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className='absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl focus:outline-none'
        >
          <FaChevronRight />
        </button>
      </div>
      <div className='flex justify-center mt-4 space-x-2'>
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-6 h-6 rounded-full focus:outline-none ${index === currentImage ? 'bg-blue-500' : 'bg-gray-300'
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
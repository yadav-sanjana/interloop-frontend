import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';

const images = [
  '/carasoul images/carasoul1.jpg',
  '/carasoul images/carasoul2.jpg',
  '/carasoul images/carasoul3.jpg',

];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change the duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [currentImage]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className='relative w-full'>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              width={1200}
              height={400}
              // layout='responsive'
              className='rounded-lg'
            />
          </div>
        ))}
      </Slider>

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
  );
};

export default Gallery;

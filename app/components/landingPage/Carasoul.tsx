'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images properly based on the file types supported by Next.js
import Image from 'next/image';
import image1 from '../../../public/carasoul images/pexels-andrea-piacquadio-3760067.jpg';
import image2 from '../../../public/carasoul images/pexels-ekaterina-bolovtsova-4049960.jpg';
import image3 from '../../../public/carasoul images/pexels-shvets-production-7176026 (3).jpg';
import image4 from '../../../public/carasoul images/keagan-henman-jr6P9SoJMNs-unsplash.jpg';
import image5 from '../../../public/carasoul images/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1, // Adjust the number of images displayed per slide
    slidesToScroll: 1, // Adjust the number of images to scroll at a time
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  };

  return (
    <div className='flex-col'>
      {/* <button onClick={prevImage}><FaLessThan /></button> */}
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              width={1200} // Set the width of the image
              height={100} // Set the height of the image
            />
          </div>
        ))}
      </Slider>
      {/* <button onClick={nextImage}><FaGreaterThan /></button> */}
    </div>
  );
};

export default Gallery;

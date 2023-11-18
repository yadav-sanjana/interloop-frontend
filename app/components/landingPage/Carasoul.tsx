'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import slider1 from '../../../public/carasoul images/drew-patrick-miller-_o6AAx9dl_Y-unsplash.jpg';
import slider2 from '../../../public/carasoul images/keagan-henman-e6BkcrbCvzs-unsplash.jpg';
import slider3 from '../../../public/carasoul images/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg';
import ThemeLink from './ThemeLink';

const Hero: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        slider1,
        slider2,
        slider3
    ];

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        console.log(currentImageIndex);
        
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='bg-gray-900 h-screen flex justify-center items-center'>
            <div className='w-3/5 h-3/5 relative'>
                <div className='w-auto h-auto'>
                    {images.map((imageUrl, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image
                                src={imageUrl}
                                alt={`Slide ${index}`}
                                height={100}
                                width={100}
                                // layout="fill"
                                // objectFit="cover"
                                priority={index === currentImageIndex}
                            />
                        </div>
                    ))}
                </div>
                <button onClick={goToPreviousImage} className='absolute top-1/2 transform -translate-y-1/2 left-4 bg-white p-2 rounded-full z-10'>Previous</button>
                <button onClick={goToNextImage} className='absolute top-1/2 transform -translate-y-1/2 left-20 bg-white p-2 rounded-full z-10'>Next</button>
            </div>
        </div>
    );
};

export default Hero;

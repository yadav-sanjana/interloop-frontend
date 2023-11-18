import Image from 'next/image';
import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div id="gallery" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            width={100} height={100} src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
          <Image
            width={100} height={100} src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            width={100} height={100} src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            width={100} height={100} src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            width={100} height={100} src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        {/* Insert SVG for Previous button */}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        {/* Insert SVG for Next button */}
      </button>
    </div>
  );
};

export default Gallery;

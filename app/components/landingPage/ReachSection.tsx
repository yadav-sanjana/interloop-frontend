import Image from 'next/image';
import React from 'react';

const ReachSection = () => {
  return (
    <section className="reach-section relative">
      <div className="triangle1 absolute top-0 left-0 w-full h-full bg-orange-300"></div>
      <div className="container mx-auto">
        <div className="widget-title text-white text-center">
          <h3 className="wow fadeInUp text-3xl font-bold mt-8">Build for Global Business</h3>
          <p className="wow fadeInUp text-white text-lg mt-4" data-wow-delay="300ms">
            Mynd has a worldwide presence through offshore offices and global partners across continents
          </p>
        </div>

        <div className="spread-map mt-8">
          <div className="section-map">
            <div className="map-container mt-4">
              {/* <Image src="images/map.png" alt="Built for Global Businesses" /> */}

              {/* Rest of the indicator elements */}
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachSection;

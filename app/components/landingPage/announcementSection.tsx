import React from 'react';
import HelpCard from '../utils-card/card';
import Image from 'next/image';

const AnnouncementSection = () => {
  return (
    <section className="announcement_section">
      <div className="container">
        <div className="widget-title text-center">
          <h3 className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            What’s New
          </h3>
          <p>Here’s the latest buzz from Interloop</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp' }}>
            <div className="dateRow">
              <div className="dateBlog">
                <Image src="images/os_d.png" alt="" />
              </div>
            </div>
            <div className="announcement_content">
              <HelpCard title="Accolades" content="We are delighted to announce that Interloop has won the NASSCOM award for Technology &amp; Excellence in
                Artificial Intelligence and Machine Learning at NATC Award 2019."/>
              <small>Accolades</small>
              <h6>Interloop recognized<br /> by NASSCOM</h6>
              <p>We are delighted to announce that Interloop has won the NASSCOM award for Technology &amp; Excellence in
                Artificial Intelligence and Machine Learning at NATC Award 2019.</p>
            </div>
          </div>

          {/* Repeat similar structures for other columns */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;

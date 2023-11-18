import React from 'react';

const IndustriesSection: React.FC = () => {
    return (
        <section className="industries_section">
            <div className="container">
                <div className="widget-title text-center pl-5 xl-5 pr-5">
                    <div className="wow fadeInUp text-3xl">Tailor-Made Solutions</div>
                    <p className="mt-1 wow fadeInUp" data-wow-delay="300ms">
                        With over two decades of working with businesses across the industries, we have developed customized
                        solutions and processes to service specialized industries to address their unique business challenges
                    </p>
                </div>
                <div className="industries_block_dv mt-4">
                    <div className="industries_flex_dv">
                        {/* Your image URLs should be provided here */}
                        <div className="industries_item_dv wow fadeInLeft">
                            <div className="cir__icon"><img src="images/in_icon1.png" alt="" /></div>
                            <h5>QSR</h5>
                            <p>Manage your restaurant operations seamlessly with custom-build solutions, from a single store to an entire chain</p>
                        </div>
                        {/* Other industries_item_dv blocks */}
                        {/* ... */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;

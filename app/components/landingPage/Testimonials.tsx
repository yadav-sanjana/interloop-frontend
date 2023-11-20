const TestimonialsSlider: React.FC = () => {
    return (
        <section className="w-full bg-blue-900 py-12">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="lg:w-8/12 md:w-full sm:w-full">
                        <div className="text-white">
                            <h3 className="text-4xl mb-4">Testimonials</h3>
                        </div>

                        <div className="mt-4">
                            <div className="owl-carousel owl-theme" id="partners-slider">
                                {/* Testimonial items */}
                                <div className="partners-item">
                                    <div className="partners-content">
                                        {/* Testimonial content */}
                                        {/* ... */}
                                        knwfwjhebcnwlctestinminirfnejn
                                    </div>
                                </div>

                                <div className="partners-item">
                                    <div className="partners-content">
                                        {/* Testimonial content */}
                                        {/* ... */}
                                        13489yt86rydbvhsbn
                                    </div>
                                </div>
                                {/* Repeat similar structure for other testimonials */}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-4/12 md:w-full sm:w-full text-right mt-8 md:mt-0">
                        <img className="w-full md:w-auto" src="images/mic-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSlider;

'use client'
import styles from "@/styles";
import { fadeIn } from "@/utils/motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const TestimonialsSlider: React.FC = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('show')
    }, [controls]);
    return (
        <section className="w-full bg-orange-300 p-12">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="lg:w-8/12 md:w-full sm:w-full">
                        <div className="text-center">
                            <motion.div
                                // variants={staggerContainer}
                                initial="hidden"
                                animate={controls}
                                className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
                            >
                                <motion.div
                                    variants={fadeIn('up', 'tween', 0.2, 1)}
                                    className="flex-[0.95] flex justify-center flex-col"
                                >
                                    <h3 className="text-3xl font-bold mb-4">Testimonials</h3>
                                </motion.div>
                            </motion.div>
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

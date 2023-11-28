'use client'
import React, { useEffect } from 'react';
import imageIntro from '../../../public/carasoul images/pexels-ekaterina-bolovtsova-4049960.jpg'
import Image from 'next/image';
import { CgArrowRight } from 'react-icons/cg';
import styles from '@/styles';
import { fadeIn } from '@/utils/motion';
import { useAnimation, motion } from 'framer-motion';
import { TypingText, TitleText } from '../CustomerTexts';

const WhoSection = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('show');
    }, [controls]);
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <div className="container mx-auto pt-10">
                <div className="text-center">
                    <motion.div
                        // variants={staggerContainer}
                        initial="hidden"
                        animate={controls}
                        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
                    >
                        <motion.div
                            className={`flex-1 ${styles.flexCenter}`}
                        >
                            <Image
                                src={imageIntro}
                                alt="whats new lg:order-1"
                                width={600}
                                height={600}
                                className='rounded-lg'
                            >

                            </Image>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('right', 'tween', 0.2, 1)}
                            className="flex-[0.95] flex justify-center flex-col"
                        >
                            <TypingText title="| Whats new?" />
                            <TitleText title={<>Introduction to Interloop</>} />

                            <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">

                                <div className="mb-4">Interloop is a leading global business process and technology management company, offering Tech enabled F&A and HR solutions to wide array of companies from Fortune 500 to small and medium businesses</div>
                            </div>
                            <div className="gap-4 ">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Learn More<CgArrowRight /></button>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Meet our Leaders<CgArrowRight /></button>

                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>


    );
};

export default WhoSection;

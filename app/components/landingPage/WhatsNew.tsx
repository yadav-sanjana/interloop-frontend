'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { newFeatures } from '../constants';
import { fadeIn } from '../../../utils/motion';
import styles from '../../../styles';
import { TitleText, TypingText } from '../CustomerTexts';
import { NewFeatures } from '../utils-card/NewFeatures';
import Image from 'next/image';

const WhatsNew = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('show');
    }, [controls]);

    return (
        <section className={`${styles.paddings} text-gray-700 relative z-10 px-4`}>
            <div className="container mx-auto pt-10">
                <div className="text-center">
                <motion.div
                    // variants={staggerContainer}
                    initial="hidden"
                    animate={controls}
                    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
                >
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 1)}
                        className="flex-[0.95] flex justify-center flex-col"
                    >
                        <TypingText title="| Whats new?" />
                        <TitleText title={<>What&apos;s new about Interloop?</>} />

                        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
                            {newFeatures.map((feature) => (
                                <NewFeatures key={feature.title} {...feature} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className={`flex-1 ${styles.flexCenter}`}
                    >
                        <Image
                            src='/carasoul images/keagan-henman-e6BkcrbCvzs-unsplash.jpg'
                            alt="whats new"
                            width={600}
                            height={600}
                            className='rounded-lg'
                        >

                        </Image>
                    </motion.div>
                </motion.div>
            </div>
        </div>
        </section >
    );
};

export default WhatsNew;

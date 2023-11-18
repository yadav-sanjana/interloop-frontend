'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { newFeatures } from '../constants';
import { staggerContainer, fadeIn } from '../../../utils/motion';
import styles from '../../../styles';
import { TitleText, TypingText } from '../CustomerTexts';
import { NewFeatures } from '../utils-card/NewFeatures';
import { FaFacebook } from 'react-icons/fa';
import logo from '../../../public/carasoul images/interloop logo.jpg'
import Image from 'next/image';

const WhatsNew = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('show');
    }, [controls]);

    return (
        <section className={`${styles.paddings} relative z-10`}>
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
                    <TitleText title={<>What's new about Interloop?</>} />
                    <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
                        {newFeatures.map((feature) => (
                            <NewFeatures imgUrl={''} key={feature.title} {...feature} />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={`flex-1 ${styles.flexCenter}`}
                >
                    <Image
                        src={logo}
                        alt="whats new"
                        width={100}
                        height={100}
                    >

                    </Image>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default WhatsNew;

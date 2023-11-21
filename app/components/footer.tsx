'use client'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { socials } from './constants';
import { footerVariants } from '../../utils/motion';
import { useInView } from 'react-intersection-observer';
import styles from '@/styles';
import logo from '../../public/carasoul images/interloop logo.jpg'
import Image from 'next/image';

const Footer = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('show');
        }
    }, [controls, inView]);

    return (
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
            className={`${styles.xPaddings} py-8 relative`}
        >
            <div className="footer-gradient" />
            <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <div className="flex items-center justify-center flex-wrap gap-5">


                    <ul className='flex'>
                        <a href='#'><li className='p-2 space-x-1'>Introduction | </li></a>
                        <a href='#'><li className='p-2 space-x-1'>Career | </li></a>
                        <a href='#'><li className='p-2 space-x-1'>Teams | </li></a>
                        <a href='#'><li className='p-2 space-x-1'>Testimonials | </li></a>
                        <a href='#'><li className='p-2 space-x-1'>About</li></a>
                    </ul>

                </div>

                <div className="flex flex-col">
                    <div className="mb-[50px] h-[2px] bg-white opacity-10" />

                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <h4 className="font-extrabold text-[24px] text-gray-700">
                            <Image
                                src={logo}
                                alt="headset"
                                width={100}
                                height={100}
                            /></h4>
                        <p className="font-normal text-[14px] text-gray-700 opacity-50">
                            Copyright © 2023 - Hysus Digital. All rights reserved.
                        </p>

                        <div className="flex gap-4">
                            {socials.map((social) => (
                                <social.url
                                    key={social.name}
                                    src={social.url}
                                    alt={social.name}
                                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;

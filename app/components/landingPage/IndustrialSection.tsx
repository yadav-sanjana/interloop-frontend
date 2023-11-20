'use client'
import React, { useEffect } from 'react';
import HelpCard from '../utils-card/card';
import { LiaSellsy } from "react-icons/lia";
import { FaHandHoldingMedical } from "react-icons/fa";
import { CgHello } from "react-icons/cg";
import { FaFileInvoice } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { CgInsights } from "react-icons/cg";
import { GrUserManager } from "react-icons/gr";
import { motion, useAnimation } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import styles from '../../../styles';


const IndustriesSection: React.FC = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('show')
    }, [controls]);

    return (
        <section className="bg-orange-300 text-black">
            <div className="container mx-auto pt-10">
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
                            <div className="text-3xl font-bold mb-4">Tailor-Made Solutions</div>
                            <p className="text-lg text-center mx-60" data-wow-delay="300ms">
                                With over two decades of working with businesses across industries, we have developed customized
                                solutions and processes to service specialized industries, addressing their unique challenges.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="flex flex-wrap justify-center">

                    <div className="w-full flex-row flex sm:w-1/2 lg:w-1/4 p-4 transition-transform duration-300 transform hover:-translate-y-1">
                        <HelpCard icon={GrUserManager} title="Q.S.R" content="Custom-built solutions let you easily manage your restaurant operations, whether you're running a single location or a network." />
                    </div>
                    <div className="w-full flex-row flex sm:w-1/2 lg:w-1/4 p-4 transition-transform duration-300 transform hover:-translate-y-1">
                        <HelpCard icon={LiaSellsy} title="Selling / Online" content="It might be difficult to manage consumers and vendors simultaneously, but interloop's AP/AR processing keeps you one step ahead." />
                    </div>
                    <div className="w-full flex-row flex sm:w-1/2 lg:w-1/4 p-4 transition-transform duration-300 transform hover:-translate-y-1">
                        <HelpCard icon={FaHandHoldingMedical} title="Medical Care" content="We collaborate with healthcare organizations to manage their staff, vendors, and patients via an interconnected paperless environment." />
                    </div>
                    <div className="w-full flex-row flex sm:w-1/2 lg:w-1/4 p-4 transition-transform duration-300 transform hover:-translate-y-1">
                        <HelpCard icon={CgHello} title="Greetings" content="Concentrate on satisfying customers while smoothly and easily optimizing your vendor and staff environment." />
                    </div>
                    <div className="w-full flex-row flex sm:w-1/2 lg:w-1/4 p-4 transition-transform duration-300 transform hover:-translate-y-1">
                        <HelpCard icon={FaFileInvoice} title="Telecom" content="Tailored solutions for the telecom sector, encompassing everything from payroll processing to invoicing and tax management via an interconnected environment" />
                    </div>

                    <div className="w-full flex-row flex sm:w-1/2 lg:w-1/4 p-4 transition-transform duration-300 transform hover:-translate-y-1">
                        <HelpCard icon={FaCarAlt} title="Car" content="Take use of Interloop's Finance & HR solutions for the Automotive Industry to increase and speed up your processing power." />
                    </div>

                    <div className="w-full flex-row flex sm:w-1/2 lg:w-1/4 p-4 transition-transform duration-300 transform hover:-translate-y-1">
                        <HelpCard icon={MdOutlinePrecisionManufacturing} title="Production" content="With Interloop's Finance & HR solutions, you can automate procedures and create best practices throughout your production divisions." />
                    </div>

                    <div className="w-full flex-row flex sm:w-1/2 lg:w-1/4 p-4 transition-transform duration-300 transform hover:-translate-y-1">
                        <HelpCard icon={CgInsights} title="Facilities oversight" content="With Interloop's HR package, you can maintain team alignment and organization in this labor-intensive sector." />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;

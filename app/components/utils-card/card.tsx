'use client'
import { IconType } from "react-icons"
import { motion, useAnimation } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import styles from '../../../styles';
import { useEffect } from "react";

interface HelpCardProps {
    title: string;
    content: string;
    icon: IconType; // Assuming you want to pass an IconType as prop
}

const HelpCard: React.FC<HelpCardProps> = ({ title, content, icon: Icon }) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('show');
    }, [controls]);
    return (
        <div className="max-w-sm hover:bg-blue-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    <Icon className="h-20 w-20 text-green-800" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{content}</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HelpCard;

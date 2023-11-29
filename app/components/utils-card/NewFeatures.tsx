import { textVariant2 } from '@/utils/motion';
import styles from '../../../styles'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { IconType } from 'react-icons';
import { DiDrupal } from 'react-icons/di';

interface NewFeaturesProps {
    title: string;
    subtitle: string;
}

export const NewFeatures: React.FC<NewFeaturesProps> = ({ title, subtitle}) => (
    <div className="flex-1 flex flex-col items-center sm:max-w-[250px] min-w-[210px]">
        <div
            className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-orange-600`}
        >
            <DiDrupal className="w-1/2 h-1/2 object-contain"/>
            {/* <Image src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" /> */}
        </div>
        <p className="mt-[26px] font-bold text-[24px] leading-[30px] text-gray-700">
            {title}
        </p>
        <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
            {subtitle}
        </p>
    </div>
);

export const TitleText = ({ title, textStyles }: any) => (
    <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-gray-700 ${textStyles}`}
    >
        {title}
    </motion.h2>
)


'use client'
import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../../utils/motion'

export const TypingText = ({ textStyles }: any) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
  </motion.p>
)

export const TitleText = ({ title, textStyles }: any) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[0px] p-[10px] font-bold md:text-[45px] text-[40px] text-gray-700 ${textStyles}`}
  >
    {title}
  </motion.h2>
)

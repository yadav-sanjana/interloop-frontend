'use client'
import { IconType } from "react-icons"
import { useAnimation } from 'framer-motion';
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
        <>

            <div className="max-w-sm hover:bg-blue-300 p-6 bg-white border border-gray-200 rounded-lg shadow">

                <div className="items-center">
                    <Icon className="h-[36px] w-[36px] text-orange-600" />
                    <a href="#">
                        <p className="my-2  text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-600">{title}</p>
                    </a>
                </div>
                <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">{content}</p>
            </div >


        </>

    );
};

export default HelpCard;

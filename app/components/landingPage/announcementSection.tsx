'use client'
import styles from "@/styles";
import { fadeIn } from "@/utils/motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { GiDiamondTrophy } from "react-icons/gi";

const AnnouncementSection: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('show')
  }, [controls]);
  return (
    <section className="text-gray-700">
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
              <div className="text-3xl font-bold mb-4">What’s New</div>
              <p>Here’s the latest buzz from Interloop</p>
            </motion.div>
          </motion.div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 m-4">
          {/* Card 1 */}
          <div className="wow fadeInUp" data-wow-delay="300ms">
            <div className="relative">
              <div className="dateBlog m-2 absolute top-0 right-0 bg-orange-600 w-14 h-14 flex items-center justify-center rounded-full">
                <GiDiamondTrophy className="text-4xl text-blue-900" />
              </div>
            </div>
            <div className="announcement_content text-gray-700 border-2 hover:bg-blue-300 hover:transform hover:shadow-lg hover:translate-y-[-8px] transition duration-300 ease-in-out py-12 px-4 rounded-lg">
              <small className="font-semibold">Accolades</small>
              <h6 className="text-2xl font-normal mb-4">Interloop recognized by NASSCOM</h6>
              <p>We are delighted to announce that Interloop has won the NASSCOM award for Technology & Excellence in Artificial Intelligence and Machine Learning at NATC Award 2019.</p>
            </div>
          </div>
          {/* Card 2 and Card 3 similar structure */}
          <div className="wow fadeInUp" data-wow-delay="300ms">
            <div className="relative">
              <div className="dateBlog m-2 absolute top-0 right-0 bg-orange-600 w-14 h-14 flex items-center justify-center rounded-full">
                <GiDiamondTrophy className="text-4xl text-blue-900" />
              </div>
            </div>
            <div className="announcement_content text-gray-700 border-2 hover:bg-blue-300 hover:transform hover:shadow-lg hover:translate-y-[-8px] transition duration-300 ease-in-out py-12 px-4 rounded-lg">
              <small className="font-semibold">Accolades</small>
              <h6 className="text-2xl font-normal mb-4">Interloop recognized by NASSCOM</h6>
              <p>We are delighted to announce that Interloop has won the NASSCOM award for Technology & Excellence in Artificial Intelligence and Machine Learning at NATC Award 2019.</p>
            </div>
          </div>
          <div className="wow fadeInUp" data-wow-delay="300ms">
            <div className="relative">
              <div className="dateBlog m-2 absolute top-0 right-0 bg-orange-600 w-14 h-14 flex items-center justify-center rounded-full">
                <GiDiamondTrophy className="text-4xl text-blue-900" />
              </div>
            </div>
            <div className="announcement_content text-gray-700 border-2 hover:bg-blue-300 hover:transform hover:shadow-lg hover:translate-y-[-8px] transition duration-300 ease-in-out py-12 px-4 rounded-lg">
              <small className="font-semibold">Accolades</small>
              <h6 className="text-2xl font-normal mb-4">Interloop recognized by NASSCOM</h6>
              <p>We are delighted to announce that Interloop has won the NASSCOM award for Technology & Excellence in Artificial Intelligence and Machine Learning at NATC Award 2019.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;

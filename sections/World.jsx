'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TypingText, TitleText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="hidden lg:block absolute top-[45%] left-[15%] w-[217px] h-[167px] p-[6px] rounded-3xl bg-[#5d6680] ">
          <img
            src="/map-card-01.png"
            alt="map card"
            className="w-full h-full"
          />
          <div className="absolute bottom-4 left-6 text-white">
            <div className="flex items-center relative">
              <div className="w-14 h-6">
                <img
                  src="/people-01.png"
                  alt="people"
                  className="w-6 h-6 absolute left-0"
                />
                <img
                  src="/people-02.png"
                  alt="people"
                  className="w-6 h-6 absolute left-3"
                />
                <img
                  src="/people-03.png"
                  alt="people"
                  className="w-6 h-6 absolute left-6"
                />
              </div>
              <div className="text-xs">+264 joined</div>
            </div>
            <div className="text-[18px] font-semibold mt-2">
              The Upside Down
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute top-[10%] right-[15%] w-[217px] h-[167px] p-[6px] rounded-3xl bg-[#5d6680]">
          <img
            src="/map-card-02.png"
            alt="map card"
            className="w-full h-full"
          />
          <div className="absolute bottom-4 left-6 text-white">
            <div className="flex items-center relative">
              <div className="w-14 h-6">
                <img
                  src="/people-01.png"
                  alt="people"
                  className="w-6 h-6 absolute left-0"
                />
                <img
                  src="/people-02.png"
                  alt="people"
                  className="w-6 h-6 absolute left-3"
                />
                <img
                  src="/people-03.png"
                  alt="people"
                  className="w-6 h-6 absolute left-6"
                />
              </div>
              <div className="text-xs">+264 joined</div>
            </div>
            <div className="text-[18px] font-semibold mt-2">Hawkins Labs</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;

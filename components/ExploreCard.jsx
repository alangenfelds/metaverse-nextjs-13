'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, handleClick, active, index }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-3xl"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] z-0">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-3xl glassmorphism mb-4`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-base leading-5 text-white uppercase">
          Enter the Metaverse
        </p>
        <h2 className="text-white mt-6 font-semibold sm:text-[32px] text-[24px]">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;

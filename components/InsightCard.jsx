'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ index, insight }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={insight.imgUrl}
      alt="planet01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {insight.title}
        </h4>
        <p className="mt-4 text-secondary-white font-normal lg:text-[20px] text-[14px]">
          {insight.subtitle}
        </p>
      </div>
      {/* button */}
      <div className="hidden lg:flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white cursor-pointer">
        <img
          src="arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;

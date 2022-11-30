'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    className={`${styles.xPaddings} py-8 relative`}
    initial="hidden"
    whileInView="show"
  >
    <div className="absolute inset-0 w-6/12 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="search" className="w-6 h-6 object-contain" />
      <h2 className="font-extrabold text-6 leading-[30px] text-white">
        METAVERSUS
      </h2>
      <img src="/menu.svg" alt="menu" className="w-6 h-6 object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;

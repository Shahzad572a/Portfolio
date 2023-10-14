import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style'
import { staggerContainer } from '../uitls/motion'

// the below two argument 1 get component 2 get it link url
const sectionWarper = (Component, idName) =>
function HOC() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >

        {/* this code get id of about component when click on 'About' button and add '/about' url . */}
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
  );
};

export default sectionWarper

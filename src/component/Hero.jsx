import React from 'react'
import {styles} from '../style'
import {motion} from 'framer-motion'
import ComputerCanva from './canvas/computer'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-auto  max-w-7xl flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>

          {/* this both are the blue line  */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/> 
        </div>
        <div>
  <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#b094ec]'>Shahzad Ali</span></h1>
  <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop user interface and web appliction <br/>through MERN stact technology.</p>
 </div>
      </div>
      <ComputerCanva/>


{/* // this is the dot and its broder */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero

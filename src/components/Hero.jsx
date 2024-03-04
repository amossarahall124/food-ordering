import React from 'react'
import hero from '/src/assets/hero.jpg'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='w-full mx-auto  bg-main-100'>
      <motion.div
        className=""
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2.0 }}
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 },
        }}>
        <div className='max-h-[550px] relative'>

          <div className='absolute w-full h-full text-second-500 max-h-[550px] bg-black/50 flex flex-col justify-center'>
            <h1 className='px-4 text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> Our <span className='text-main-950'> Best</span></h1>
            <h1 className='px-4 text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-main-950'> BEE</span> Desired </h1>
          </div>
          <img className='w-full max-h-[550px] object-cover' src={hero} alt="/" />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
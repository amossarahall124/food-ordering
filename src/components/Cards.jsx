import React from 'react';
import carrier from '../assets/carrier.jpg'
import open from '../assets/open.jpg'
import ordering from '../assets/ordering.jpg'
import { motion } from "framer-motion";

const Cards = () => {
  return (
    < section className=" p-6 bg-main-100">
      <motion.div
        className=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 3.0 }}
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 },
        }}>
        <h1 className=" items-center text-second-500 bg-main-100 font-bold text-4xl text-center ">OUR SERICES  </h1>
        <div className='w-full bg-main-100 mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
          <div className='rounded-xl relative'>

            <div className='absolute w-full  h-full bg-black/80 rounded-xl text-second-100'>
              <p className='font-bold text-2xl px-2 pt-4'>Same Day Delivery</p>
              <p className='px-2 text-main-950'> Anywhere 24-7</p>
              <button className='border-main-500 bg-second-500 text-main-500 mx-2 absolute bottom-4 hover:bg-main-700 hover:border-second-500 hover:text-second-100  transform translate-x-6 hover:scale-125  transition ease-in-out duration-900 '>Order Now</button>
            </div>
            <img
              className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'
              src={carrier}
              alt='bike delivery'
            />
          </div>

          <div className='rounded-xl relative'>

            <div className='absolute w-full h-full bg-black/80 rounded-xl text-second-100'>
              <p className='font-bold text-2xl  px-2 pt-4'>New Meal Request</p>
              <p className='px-2 text-main-950'> We Tailer to your taste</p>
              <button className='border-main-500 bg-second-500 text-main-500 mx-2 absolute bottom-4 hover:bg-main-700 hover:border-second-500 hover:text-second-100 transform translate-x-6 hover:scale-125  transition ease-in-out duration-900'>Order Now</button>
            </div>
            <img
              className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'
              src={ordering}
              alt='woman odering'
            />
          </div>

          <div className='rounded-xl relative'>

            <div className='absolute w-full h-full bg-black/80 rounded-xl text-second-100'>
              <p className='font-bold text-2xl px-2 pt-4'>Our locations Are Always Open</p>
              <p className='px-2 text-main-950'> No Preorder just Walking In</p>
              <button className='border-main-500 bg-second-500 text-main-500 mx-2 absolute bottom-4 hover:bg-main-700 hover:border-second-500 hover:text-second-100  transform translate-x-6 hover:scale-125  transition ease-in-out duration-900'>Order Now</button>
            </div>
            <img
              className='max-h-[180px] md:max-h-[250px] w-full object-cover rounded-xl'
              src={open}
              alt='open doors'
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Cards;

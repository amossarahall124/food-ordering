import React from 'react';
import { categories } from '../data/data';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className='w-full bg-main-100 m-auto px-4 py-12'>
      <motion.div
        className=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2.0 }}
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 },
        }}>
        <h1 className='text-second-500 font-bold text-4xl text-center'>
          Top Rated Menu Items
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
          {categories.map((item, index) => (
            <div
              key={index}
              className='bg-gray-100 border-second-500 border-[4px] rounded-lg p-3 flex justify-between items-center cursor-pointer hover:scale-105 duration-300'
            >
              <h2 className='font-bold sm:text-2xl'>{item.name}</h2>
              <img src={item.image} alt={item.name} className='w-20' />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;

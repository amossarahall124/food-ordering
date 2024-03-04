import React, { useState } from 'react';
import { data } from '/src/data/data';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { motion } from "framer-motion";


const Food = (props) => {

  const [cartItems, setCartItems] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 })

  const [foods, setFoods] = useState(data);

  const addToCart = (id) => {
    setCartItems(cartItems => ({ ...cartItems, [id]: cartItems[id] + 1 }))
  }

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (range) => {
    setFoods(
      data.filter((item) => {
        return item.range === range;
      })
    );
  };

  return (
    <div className='w-full bg-main-100 m-auto px-4 py-12'>
      <h1 className='text-second-500 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      <div className='flex flex-col lg:flex-row justify-between'>
        <div>
          <p className='font-bold text-main-900'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-second-100 text-main-700 bg-second-500  hover:bg-main-700 hover:border-v hover:text-second-100'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-second-100 text-main-700 bg-second-500  hover:bg-main-700 hover:border-second-500 hover:text-second-100'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-second-100 text-main-700 bg-second-500  hover:bg-main-700 hover:border-second-500 hover:text-second-100'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-second-100 text-main-700 bg-second-500  hover:bg-main-700 hover:border-second-500 hover:text-second-100'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-second-100 text-main-700 bg-second-500 hover:bg-main-700 hover:border-second-500 hover:text-second-100'
            >
              Chicken
            </button>
            <button
              onClick={() => filterType('drink')}
              className='m-1 border-second-100 text-main-700 bg-second-500 hover:bg-main-700 hover:border-second-500 hover:text-second-100'
            >
              drink
            </button>
          </div>
        </div>


        <div>
          <p className='font-bold text-main-900'>Filter Price</p>
          <div className='flex justify-between max-w-[400px] sm:w-4/5 md:w-full '>

            <button
              onClick={() => filterPrice('-50')}
              className='m-1 border-second-100  text-main-700 bg-second-500 hover:bg-main-700 hover:border-second-500 hover:text-second-100'
            >
              $-50
            </button>
            <button
              onClick={() => filterPrice('50-100')}
              className='m-1 border-second-100 text-main-700 bg-second-500  hover:bg-main-700 hover:border-second-500 hover:text-second-100'
            >
              $50-100
            </button>
            <button
              onClick={() => filterPrice('100-150')}
              className='m-1 border-second-100 text-main-700 bg-second-500  hover:bg-main-700 hover:border-second-500 hover:text-second-100'
            >
              $100-150
            </button>
            <button
              onClick={() => filterPrice('150-')}
              className='m-1 border-second-100 text-main-700 bg-second-500  hover:bg-main-700 hover:border-second-500 hover:text-second-100'
            >
              $150-
            </button>
          </div>
        </div>
      </div>
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

        <div className='grid grid-cols-2 grid-row-9 lg:grid-cols-4 gap-6 pt-4'>
          {foods.map((item, index) => (
            <div
              key={index}
              className=' shadow-lg border-[5px] border-second-100  bg-second-500 rounded-lg cursor-pointer hover:scale-105 duration-300'
            >
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-[200px] object-cover rounded-t-lg  '
              />
              <div className='flex justify-between px-2 py-4 '>
                <p className='font-bold text-main-500 '>{item.name}</p>
                <p>
                  <span className='bg-main-700 text-second-100 cursor-pointer p-2 border border-black rounded-full hover:bg-main-950 hover:border-second-500 hover:text-main-500  transform hover:scale-130  transition ease-in-out duration-900'>$
                    {item.price}
                  </span>
                </p>
                <button onClick={() => {
                  addToCart(item.id)
                }} className='bg-main-700 text-second-100 cursor-pointer p-2 border rounded-full -mt-[5px] hover:bg-main-950 hover:border-second-100 hover:text-main-500  transform hover:scale-130  transition ease-in-out duration-900'>
                  <BsFillCartFill size={20} className='mr-2' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div >
  );
};

export default Food;

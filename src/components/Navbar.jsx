import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import bee from '../assets/bee.jpg'
import { data } from '../data/data';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Food from './Food';


const Navbar = (props) => {

  const navigate = useNavigate();

  const [navBar, setNavBar] = useState(false)
  const [navCart, setNavCart] = useState(false)
  const [cartItems, setCartItems] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 })

  const location = useLocation();

  useEffect(() => {
    setNavBar(false);
  }, [location]);

  const addToCart = (id) => {
    setCartItems(cartItems => ({ ...cartItems, [id]: cartItems[id] + 1 }))
  }
  const subFromCart = (id) => {
    setCartItems(cartItems => ({ ...cartItems, [id]: cartItems[id] - 1 }))
  }
  const removeFromCart = (id) => {
    setCartItems(cartItems => ({ ...cartItems, [id]: cartItems[id] = 0 }))
  }

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        let itemInfo = data.find(data => data.id === Number(key))
        totalAmount += Math.floor(cartItems[key] * data.price)
      }
    }
    return totalAmount
  }

  return (
    <div className='w-full mx-auto flex justify-between bg-main-100 items-center  p-4'>
      <div className='flex items-center'>
        <div onClick={() => setNavBar(!navBar)} className='cursor-pointer '>
          <AiOutlineMenu size={30} className="text-second-100" />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-second-500 px-2'>
          Yellow <span className='font-bold text-3xl sm:text-4xl lg:text-5xl text'>Jacket</span>
        </h1>
        <img src={bee} alt="bee icon" width={50} height={50} className="sm:translate-x--12 rounded-full" />
        <div className='hidden lg:flex items-center  gap-4 rounded-full p-5 text-[14px]'>
          <button onClick={() => { navigate("/Menu") }} className='bg-second-200  text-main-800 text-[18px] rounded-full px-8 py-4 font-bold cursor-pointer hover:bg-main-700 hover:border-second-500  hover:text-second-100  hover:scale-130  transition ease-in-out duration-900'>Order</button>

        </div>
      </div>

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[150px] sm:w-[300px] lg:w-[500px] '>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none '
          type='text'
          placeholder='Search foods'
        />
      </div>
      <button onClick={() => setNavCart(!navCart)} className='bg-second-500  text-main-800 hidden md:flex items-center py-5 rounded-full hover:bg-main-700 hover:border-second-500  hover:text-second-500  hover:scale-130  transition ease-in-out duration-900'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>
      {navBar ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

      <div className={navBar ? 'fixed top-0 left-0 w-[300px] h-screen bg-main-100 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-second-100  z-10 duration-300'}>
        <AiOutlineClose
          onClick={() => setNavBar(!navBar)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer text-main-950'
        />
        <h2 className='text-[28px] p-4 text-main-900'>
          Best <span className='font-bold text-main-700'>Eats</span>
        </h2>
        <nav>
          <div className='flex flex-col p-4 text-second-500 text-[18px] cursor-pointer'>
            <Link to="/" className='text-xl py-4 flex '><TbTruckDelivery size={25} className='mr-4 ' />Home</Link>
            <Link to="/WhyUS" className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' />Why Us</Link>
            <Link to="/Menu" className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' />Menu</Link>
            <Link to="/Contact" className='text-xl py-4 flex'>< FaUserFriends size={25} className='mr-4' /> Contact</Link>
          </div>
        </nav>
      </div>
      {navCart ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      <div className={navCart ? 'fixed top-0 right-0 w-[500px] h-screen bg-main-100 z-10 duration-300' : 'fixed top-0 right-[-100%] w-[300px] h-screen  z-10 duration-300'}>

        <div className="w-full h-2/3 ">
          <AiOutlineClose
            onClick={() => setNavCart(!navCart)}
            size={30}
            className='absolute right-4 top-4 cursor-pointer text-main-900' />
          <div className="flex flex-col  justify-center gap-4">
            <h1 className='text-main-900  font-bold text-3xl mt-8 p-4 items-center text-center'>Your <span className='text-main-800'>Cart</span></h1>

            {data.map(data => {
              if (cartItems[data.id] !== 0) {
                return <div key={data.id} className=''>
                  <div className=' border-4 border-second-500  bg-main-100 w-full h-2/3 flex justify-between items-center'>
                    <div className='flex items-center'>
                      <img className='max-h-[150px] md:max-h-[180px], max-w-[220px] md:max-w-[260px]  rounded-md' alt={data.name}
                        src={data.image} />
                      <p className='text-3xl text-second-500 font-bold '>{cartItems[data.id]}</p>
                    </div>
                    <div className=' flex flex-col items-center   text-second-500 justify-center  gap-4 '>
                      <p className='text-bold text-2xl'>{data.name}</p>

                      <p className='text-bold text-3xl'>${data.price}</p>
                    </div>
                    <div className='flex flex-col gap-1  font-bold mr-4'>
                      <button onClick={() => removeFromCart(data.id)} className='text-second-300 border-1 border-second-300 bg-stone-900 hover:bg-main-700  hover:text-yellow-500 p-2 rounded'>Remove</button>
                      <button onClick={() => addToCart(data.id)} className='text-green-500 text-[20px] font-bold hover:bg-green-500 hover:text-green-700 p-1 rounded bg-stone-900'>+</button>
                      <button onClick={() => subFromCart(data.id)} className=' text-red-500 text-[20px] font-bold hover:bg-red-500 hover:text-red-700 p-1 rounded bg-stone-900'>-</button>
                    </div>

                  </div>
                </div>
              }
            })}

          </div>
        </div>
        <div className='bg-main-100 w-full max-h-[600px] h-full'>
          <p className="text-1xl text-second-500  font-bold p-2 ml-4">Service Cost:   $0 </p>
          <p className="text-1xl text-second-500  font-bold p-2 ml-3">Delivery Cost:  <span className="text-green-500">FREE</span></p>
          <p className='text-3xl text-second-500  font-bold p-4  '>Total: ${getTotalAmount()}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

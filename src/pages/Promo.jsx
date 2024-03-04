import React from 'react'
import { Suspense } from 'react';
import devli from '/src/assets/devli.jpg'
import celebrate from '/src/assets/celebrate.png'
import { motion } from "framer-motion";

const Spline = React.lazy(() => import('@splinetool/react-spline'))


const Promo = () => {
    return (
        <div className=" bg-white  h-screen  w-4/5  ">
            <div className=" relative">
                <div className=" ">
                    <div className="w-full h-full ">

                        <div className=' w-[400px] max-h-[450px] flex justify-center items-start mt-[70px]  ml-[180px] lg:mt-12  relative mb-12'>
                            <img className='w-[400px]  h-[250px] lg:h-[600px]  lg:w-[650px] object-cover border-4 border-main-100 rounded-md hover:z-50 hover:scale-75 lg:hover:scale-125 duration-700' src={celebrate} alt="/" />
                        </div>
                        <div className="absolute  ml-[100px] lg:ml-[880px]  max-w-[500px] max-h-[500px] w-[290px] h-[280px] lg:w-[350px] lg:h-[500px] bg-main-100 border-4 border-second-100 hover:scale-125 hover:ml-[700px] duration-700 hover:z-50">
                            <div className=" flex items-center justify-center gap-4 ">
                                <h1 className=" text-[18px] lg:text-[24px] p-4 text-second-500 text-bold text-center ">Welcome to Yellow Jacket</h1>
                                <p className="text-[12px] lg:text-[14px] text-center text-second-100 p-2"> At our core, we are passionate about bringing delicious meals right to your doorstep. Our team is dedicated to providing you with a seamless and convenient dining experience, whether you're craving a cozy night in or hosting a gathering with friends.</p>
                            </div>
                            <div className=' max-w-[550px] max-h-[450px] flex justify-center items-start mt-[100px]  lg:mt-8  relative mb-12'>
                                <img className='w-[400px]  h-[250px] lg:h-[600px]  lg:w-[650px] object-cover border-4 border-main-100 rounded-md hover:z-50 hover:scale-75 lg:hover:scale-125 duration-700' src={devli} alt="/" />
                            </div>
                        </div>

                    </div>

                    {/* <Suspense fallback={<div className=" text-[18px] text-second-500">Loading.....</div>}>
                        <Spline className=" absolute mt-30  " scene="https://prod.spline.design/6tL89J8jH-n8ohUf/scene.splinecode" />
                    </Suspense> */}
                </div>
            </div>
        </div>
    )
}

export default Promo

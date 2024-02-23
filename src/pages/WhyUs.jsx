import React from 'react'
import about from '../assets/about.png'
import { motion } from "framer-motion";


const WhyUs = () => {
    return (
        <div className='w-screen mx-auto  bg-white'>
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
                <div className=' max-w-[650px] max-h-[750px] flex justify-center items-start mt-16 mr-48 lg:mt-12 lg:ml-[400px] relative mb-12'>

                    <img className='w-[350px]  h-[580px] lg:h-[600px]  lg:w-[650px] object-cover border-4 border-main-100 rounded-md hover:z-50 hover:scale-75 lg:hover:scale-125 duration-700' src={about} alt="/" />

                    <div className="absolute mt-[50px] ml-[500px] lg:ml-[880px]  max-w-[500px] max-h-[800px] w-[230px] h-[450px] md:w-[290px] md:h-[480px] lg:w-[350px] lg:h-[500px] bg-main-100 border-4 border-second-100 hover:scale-125 hover:ml-[400px] md:hover:ml-[700px] duration-700 hover:z-50">
                        <motion.div
                            className=""
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 2.0 }}
                            variants={{
                                hidden: { opacity: 0, y: -80 },
                                visible: { opacity: 1, y: 0 },
                            }}>
                            <div className=" flex items-center justify-center gap-4 "></div>
                            <h1 className=" text-[18px] lg:text-[24px] p-4 text-second-500 text-bold text-center ">Welcome to Yellow Jacket</h1>
                            <p className="text-[12px] lg:text-[14px] text-center text-second-100 p-2"> At our core, we are passionate about bringing delicious meals right to your doorstep. Our team is dedicated to providing you with a seamless and convenient dining experience, whether you're craving a cozy night in or hosting a gathering with friends.

                                We work closely with a diverse range of restaurants to offer you a wide selection of cuisines to choose from. From comforting classics to exotic flavors, we strive to cater to every palate and preference.</p>

                            <p className="hidden md:block text-[12px] lg:text-[14px] text-center text-second-100 p-2">Customer satisfaction is our top priority, and we are committed to delivering your orders promptly and ensuring that your food arrives fresh and flavorful every time. Your feedback is invaluable to us as we constantly strive to improve and enhance our services.

                                Thank you for choosing us to satisfy your cravings and make mealtime easier. We look forward to serving you and being a part of your dining adventures!</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default WhyUs

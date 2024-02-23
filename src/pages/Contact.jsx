import React from 'react'
import contact from '../assets/contact.png'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FooterTwo from '../components/FooterTwo'
import { motion } from "framer-motion";

const Contact = () => {
    const schema = yup.object().shape({
        FirtName: yup.string().required("Your full Name is Required!"),
        number: yup.number().positive().integer().min(10).required("please enter a vaild number"),
        email: yup.string().email().required(),
        message: yup.string(),

    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <div className=" w-full h-full bg-main-100 ">
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

                    <div className='absolute w-full h-full text-second-500 max-h-[550px] bg-black/50 flex flex-row justify-start items-center'>
                        <h1 className='px-4 text-5xl sm:text-3xl md:text-4xl lg:text-7xl font-bold mt-24 lg:mt-52'> Contact Us </h1>
                    </div>
                    <img className='w-full max-h-[500px] h-[300px]  lg:h-[500px]  object-cover' src={contact} alt="/" />
                </div>

                <div className=" w-screen h-screen flex flex-col  mt-14 justify-center items-center gap-2">
                    <div className=" text-[30px] text-second-100 p-2"><h1 className=" text-[26px] md:text-[28px] lg:text-[34px]text-second-100 p-2 mt-8">
                        Contact Form
                    </h1>

                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <ul className="flex flex-col gap-6 items-center justify-center">
                                <div className="borer-2 text-main-500 text- ">
                                    < li className=" flex flex-col text-[12px] lg:text-[20px] gap-2 ">
                                        <label className="text-second-200 text-[18px]  ">Full Name</label>
                                        <input className="px-12 py-2 rounded-lg" type="text"  {...register("fullName")} />
                                        <p className="error">{errors.fullName?.message}</p>
                                    </li>
                                </div>
                                <li className="borer-2 ml-2 text-main-500 text-start text-[12px] lg:text-[20px] flex flex-col gap-2">
                                    <label className="text-second-200 text-[18px]">Number</label>
                                    <input className="px-12 py-2 rounded-lg" type="number"  {...register("number")} />
                                    <p className="error" >{errors.number?.message}</p>
                                </li>
                                <li className="borer-2 ml-2 text-main-500 text-start text-[12px]  lg:text-[20px] flex flex-col gap-2">
                                    <label className="text-second-200 text-[18px]">Email</label>
                                    <input className="px-12 py-2 rounded-lg placeholder-gray-800 " type="email" placeholder="johnsith@gmail.com" {...register("email")} />
                                    <p className="error">{errors.email?.message}</p>
                                </li>
                                <li className="borer-2 ml-2 text-main-500 text-start text-[12px]   lg:text-[20px] flex flex-col gap-2">
                                    <label className="text-second-200 text-[18px] ml-20 "> Message</label>
                                    <input className="px-24 py-20 rounded-lg ml-20 placeholder-gray-800 placeholder-text-start " type="text" placeholder="Optional" {...register("message")} />
                                </li>
                            </ul>
                            <div className="flex flex-col items-center justify-center mt-4">
                                <button className="py-2 px-2  item-start mr-36 md:mr-44 lg:mr-60 border-2 rounded-lg bg-second-300 hover:bg-main-950 black hover:border-second-100">
                                    <p className="text-[18px] text-main-500 hover:text-second-500 font-bold " >Submit </p>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className=" w-full lg:w-3/5 mt-8 mb-24 ml-8 h-full flex item-center  text-center justify-center ">
                        <p className="w-3/5 h-full text-[18px] text-second-300">Got a question about your order? Need help with some of your app features? Contact Help Centre via  Email or phone number </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact

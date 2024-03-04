import React, { useEffect } from 'react'
import bee from '/src/assets/bee.jpg'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useNavigate } from 'react-router-dom';
import footer from '/src/assets/footer.png'


const FooterTwo = () => {
    const navigate = useNavigate();

    return (
        <div className=" max-h-[400px] w-full  flex flex-col  items-center justify-center border-second-500 relative">
            <img className='w-full max-h-[300px] object-cover ' src={footer} alt="/" />

            <div className=' absolute flex-col justify-center max-w-[800px] max-h-[300px] w-[450px] h-[250px] md:w-[600px] md:h-[250px] mlg:w-[800px] lg:h-[250px] bg-main-100 border-4 border-second-100'>

                <div className=" flex justify-center  items-center gap-2 p-2  ">
                    <img src={bee} alt="bee icon" width={40} height={40} className="sm:translate-x--12 rounded-full" />
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-second-500 px-2'>
                        Yellow <span className='font-bold text-3xl sm:text-4xl lg:text-5xl text'>Jacket</span>
                    </h1>
                </div>
                <div className="flex justify-center items-center   mb-12 ">
                    <div className=" flex flex-col items-center justify-center px-4 ">
                        <h1 className=" font-bold text-[18px] text-white p-2">Pages</h1>
                        <p onClick={() => { navigate("/") }} className="text-white text-1xl cursor-pointer hover:scale-125 hover:text-second-500 p-1">Home</p>

                        <p onClick={() => { navigate("/WhyUS") }} className="text-white text-1xl cursor-pointer hover:scale-125 hover:text-second-500 p-1">Why us </p>

                        <p onClick={() => { navigate("/Menu") }} className="text-white text-1xl cursor-pointer hover:scale-125 hover:text-second-500 p-1">Menu</p>

                        <p onClick={() => { navigate("/Contact") }} className="text-white text-1xl cursor-pointer hover:scale-125 hover:text-second-500 p-1">Contact</p>

                    </div>
                    <div className=" flex flex-col items-center justify-center  w-full h-full -mt-[102px]">
                        <h1 className=" font-bold text-1xl text-white p-4  ">Follow us on  </h1>
                        <div className="flex flex-row items-start justify-normal gap-2 "> <XIcon width={50} height={50} className="text-white cursor-pointer hover:scale-125 hover:text-second-500 " /> <InstagramIcon width={50} height={50} className="text-white cursor-pointer hover:scale-125 hover:text-second-500 " />
                            <TelegramIcon width={50} height={50} className="text-white cursor-pointer hover:scale-125 hover:text-second-500 " />
                        </div>
                    </div>
                    <div className=" text-1xl text-white w-4/5 h-4/5 flex flex-col items-center justify-center gap-8">
                        <p className='text-center '>Lorem, ipsum dolor sit amet consectetur

                        </p>
                        <p className='text-center '> Copright &copy; 2024 Q-Hall Privacy Policy</p>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default FooterTwo

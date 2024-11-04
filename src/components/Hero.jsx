import React from 'react'
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div
            className='w-full md:h-[70vh] h-screen'
            style={{ backgroundImage: "url('/dubai img.png')", backgroundPosition: 'top', backgroundSize: 'cover' }}
        >
            <div className='w-full h-full bg-blue-900/60 text-white flex gap-2 justify-center items-center flex-col'>

                <motion.div
                    whileInView={{ y: [-70, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <h1 className='font-bold sm:text-5xl text-4xl px-1 sm:text-start text-center'>Are You a Supplier?</h1>
                    <h3 className='font-normal sm:text-4xl text-2xl px-1 sm:text-start text-center'>Explore Matching Opportunities.</h3>
                </motion.div>

                <div
                    className="flex sm:flex-row flex-col justify-center items-center sm:space-x-4 sm:gap-0 gap-3 p-4 mt-4"
                >
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className="flex items-center bg-white shadow-md rounded-md lg:min-w-[20rem] md:w-[17rem] sm:w-[15rem] w-[18rem] px-4 py-2"
                    >
                        <span className="text-orange-500 pr-2">
                            <BsFillSuitcaseLgFill />
                        </span>
                        <input
                            className="outline-none w-full text-gray-700"
                            type="text"
                            placeholder="Search your required service here"
                        />
                    </motion.div>
                    <motion.div
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className="flex items-center bg-white shadow-md rounded-md  lg:min-w-[20rem] md:w-[17rem] sm:w-[15rem] w-full px-4 py-2">
                        <span className="text-orange-500 pr-2">
                            <IoLocationSharp />
                        </span>
                        <input
                            className="outline-none w-full text-gray-700"
                            type="text"
                            placeholder="Search your desired location here"
                        />
                    </motion.div>

                    <motion.button
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className="bg-green-700 sm:w-fit w-full hover:bg-green-600 transition-all text-white rounded-md px-6 py-2 active:!scale-95">
                        Search
                    </motion.button>
                </div>

                <motion.div
                    whileInView={{ y: [50, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }} className='flex sm:flex-row flex-col items-center sm:gap-2 mt-2'>
                    <p className='font-semibold'>Are you a buyer?</p>
                    <p className='underline font-normal sm:text-base text-sm text-white/90 cursor-pointer'>Click here if you are looking to post a requirements</p>
                </motion.div>


            </div>
        </div>
    )
}

export default Hero
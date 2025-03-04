import React from "react";
import { Navbar } from "../components";

const Home = () => {
    return (
        <div className="bg-black w-full h-screen flex justify-center text-white">
            <div className="w-3xl p-6">
                <Navbar/>
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 my-20">
                    <div className="w-40 h-40 border-4 border-white rounded-full overflow-hidden justify-self-center">
                        <img className="h-full w-full border-3 border-blue-400 rounded-full" src="https://i.ibb.co/h1KZg9hH/profile.jpg" border="0" alt="Display Picture" />
                    </div>
                    <div className="max-w-lg flex flex-wrap mx-4">
                        <p className="text-4xl text-gray-400 font-(family-name:--font-monasans) my-3 ">Hey 👋, I'm <a href="#" className="text-blue-400 font-bold">Sobhan</a>. I'm a full-stack dev with a passion for building web applications.</p>
                        <ul className="w-full flex justify-between mx-0 my-3 ">
                            <a href="https://github.com/so-bhannn" className="flex items-center md:gap-1">
                                <i className='bx bxl-github text-4xl md:text-2xl text-white'></i>
                                <p className="hidden text-gray-400 hover:text-white font-semibold md:block">so-bhannn</p>
                            </a>
                            <a href="https://www.linkedin.com/in/sobhan-ghosh-227033240" className="flex items-center md:gap-1">
                                <i className='bx bxl-linkedin text-4xl md:text-2xl text-blue-500'></i>
                                <p className="hidden text-gray-400 hover:text-blue-500 font-semibold md:block">Sobhan Ghosh</p>
                            </a>
                            <a href="https://x.com/so_bhann" className="flex items-center md:gap-1">
                                <i className='bx bxl-twitter text-4xl md:text-2xl text-blue-300'></i>
                                <p className="hidden text-gray-400 hover:text-blue-300 font-semibold md:block">@so_bhann</p>
                            </a>
                            <a href="https://www.instagram.com/so_bhann/" className="flex items-center md:gap-1">
                                <i className='bx bxl-instagram text-4xl md:text-2xl text-rose-400'></i>
                                <p className="hidden text-gray-400 hover:text-rose-400 font-semibold md:block">@so_bhann</p>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
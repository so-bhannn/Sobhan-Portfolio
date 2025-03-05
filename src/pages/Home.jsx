import React from "react";
import { Navbar,
        Footer 
        } from "../components";

const Home = () => {
    return (
        <div className="bg-black w-full h-full flex justify-center text-white">
            <div className="w-3xl p-6">
                <Navbar/>
                <section className="flex flex-col md:flex-row justify-between items-center gap-3 my-15">
                    <div className="w-40 h-40 border-4 border-white rounded-full overflow-hidden justify-self-center">
                        <img className="h-full w-full border-3 border-blue-400 rounded-full" src="https://i.ibb.co/h1KZg9hH/profile.jpg" border="0" alt="Display Picture" />
                    </div>
                    <div className="max-w-lg flex flex-wrap mx-4">
                        <p className="text-4xl text-gray-400 font-(family-name:--font-monasans) my-3 text-center ">Hey 👋, I'm <a href="#" className="text-blue-400 font-bold">Sobhan</a>. I'm a full-stack dev with a passion for building web applications.</p>
                        <ul className="w-full flex justify-between mx-0 my-3 ">
                            <a href="https://github.com/so-bhannn" className="flex items-center md:gap-1">
                                <i className='bx bxl-github text-4xl md:text-2xl text-white'></i>
                                <p className="hidden text-gray-400 hover:text-white md:block">so-bhannn</p>
                            </a>
                            <a href="https://www.linkedin.com/in/sobhan-ghosh-227033240" className="flex items-center md:gap-1">
                                <i className='bx bxl-linkedin text-4xl md:text-2xl text-blue-500'></i>
                                <p className="hidden text-gray-400 hover:text-blue-500 md:block">Sobhan Ghosh</p>
                            </a>
                            <a href="https://x.com/so_bhann" className="flex items-center md:gap-1">
                                <i className='bx bxl-twitter text-4xl md:text-2xl text-blue-300'></i>
                                <p className="hidden text-gray-400 hover:text-blue-300 md:block">@so_bhann</p>
                            </a>
                            <a href="https://www.instagram.com/so_bhann/" className="flex items-center md:gap-1">
                                <i className='bx bxl-instagram text-4xl md:text-2xl text-rose-400'></i>
                                <p className="hidden text-gray-400 hover:text-rose-400 md:block">@so_bhann</p>
                            </a>
                        </ul>
                    </div>
                </section>

                <section>
                    <h1 className="font-(family-name:--font-geistmono) text-3xl text-white uppercase tracking-widest my-8">
                        Pr0jects
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center font-(family-name:--font-funnelsans)">

                        {/* Project #1 */}
                        <div className="flex flex-col max-w-sm rounded-sm overflow-hidden">
                            <img className="w-full" src="src/assets/pricewise.jpg"/>
                            <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white px-2 pb-2">
                                <div className="flex justify-between px-3 py-2 ">
                                    <h1 className="text-2xl">Pricewise</h1>
                                    <div className="flex">
                                        <i className='bx bxl-html5 text-3xl text-white/80'></i>
                                        <i className='bx bxl-css3 text-3xl text-white/80'></i>
                                        <i className='bx bxl-django text-3xl text-white/80'></i>
                                    </div>
                                </div>
                                <div className="w-full flex gap-4">
                                    <p className="w-3xs text-sm mb-1">A powerful tool for tracking, comparing, and analyzing prices across platforms.</p>
                                    <div className="inline justify-end gap-1">
                                    <a href="#"><i className='bx bx-link text-4xl md:text-2xl text-white/80'></i></a>
                                    <a href="#"><i className='bx bxl-github text-4xl md:text-2xl text-white/80'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project #2 */}
                        <div className="flex flex-col max-w-sm rounded-sm overflow-hidden">
                            <img className="w-full" src="src/assets/githubcard.png"/>
                            <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white px-2 pb-2">
                                <div className="flex justify-between px-3 py-2 ">
                                    <h1 className="text-2xl">GitHub-Card</h1>
                                    <div className="flex">
                                        <i className='bx bxl-javascript text-3xl text-white/80'></i>
                                        <i className='bx bxl-django text-3xl text-white/80'></i>
                                    </div>
                                </div>
                                <div className="w-full flex gap-4">
                                    <p className="w-3xs text-sm mb-1">Generate stylish GitHub profile cards with your avatar, bio, and stats.</p>
                                    <div className="inline justify-end gap-1">
                                        <a href="#"><i className='bx bx-link text-4xl md:text-2xl text-white/80'></i></a>
                                        <a href="#"><i className='bx bxl-github text-4xl md:text-2xl text-white/80'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
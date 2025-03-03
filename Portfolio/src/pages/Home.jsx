import React from "react";
import { useState } from "react";


const Home = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="bg-black w-full h-screen flex justify-center text-white">
            <div className="w-3xl p-6">
                <div className="flex justify-between items-center py-8">
                    <a href="#">SOBHAN</a>
                    <nav>
                        <section className="MOBILE-MENU flex lg:hidden">
                            <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={()=> setIsNavOpen((prev)=>!prev)}
                            >
                                <span className="block h-0.5 w-8 bg-white/50"></span>
                                <span className="block h-0.5 w-8 bg-white/50"></span>
                                <span className="block h-0.5 w-8 bg-white/50"></span>
                            </div>
                            
                            <div className={isNavOpen ? "showMenuNav":"hideMenuNav"} >
                                <div className="CROSS-ICON absolute top-0 right-0 px-6 py-13"
                                onClick={()=>setIsNavOpen(false)}>
                                    <svg
                                        className="w-9 h-9 text-white/50"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="20" y1="6" x2="6" y2="20"></line>
                                        <line x1="6" y1="6" x2="20" y2="20"></line>
                                    </svg>
                                </div>
                                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-center min-h-[250px]">
                                    <li className="border-b border-gray-400 my-8">
                                        <a href="#">Projects</a>
                                    </li>
                                    <li className="border-b border-gray-400 my-8">
                                        <a href="#">Blogs</a>
                                    </li>
                                    <li className="border-b border-gray-400 my-8">
                                        <a href="#">About</a>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Blogs</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                        </ul>
                    </nav>
                    <style>{`
                    .hideMenuNav{
                    display:none;
                    }
                    .showMenuNav{
                        display:block;
                        position:absolute;
                        width: 100%;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        background-color: rgba(0, 0, 0, 0.9);
                        z-index: 10;
                        display:flex;
                        flex-direction:column;
                        justify-content:space-evenly;
                        align-items:center;
                        }
                    `}</style>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 my-20">
                        <div className="w-40 h-40 border-4 border-white rounded-full overflow-hidden justify-self-center">
                            <img className="border-3 border-blue-400 rounded-full" src="src/assets/profile.jpg" alt="Display Picture" />
                        </div>
                        <div className="max-w-lg flex flex-wrap">
                            <p className="text-4xl text-gray-400 font-(family-name:--font-monasans) mx-6 my-3">Hey 👋, I'm <a href="#" className="text-blue-400 font-bold">Sobhan</a>. I'm a full-stack dev with a passion for building web applications.</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home
import { Navbar,
        Footer 
        } from "../components";

const Home = () => {
    return (
        <div className=" w-full h-full flex justify-center text-white">
            <div className="w-3xl p-6">
                <Navbar/>
                <section className="flex flex-col md:flex-row justify-between items-center gap-3 mt-15">
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

                <section className="mt-15">
                    <h1 className="font-(family-name:--font-monasans) text-2xl text-white uppercase font-semibold my-8">
                        Projects
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center font-(family-name:--font-funnelsans)">

                        {/* Project #1 */}
                        <a href="https://github-cards-phi-two.vercel.app/">
                            <div className="flex flex-col min-w-[296px] max-w-[352px] rounded-sm overflow-hidden hover:scale-105 transition-transform duration-400">
                            <img src="https://i.ibb.co/Kp4M9jNC/Screenshot-82.png" alt="Github-cards-preview" border="0" />
                                <div className="bg-gradient-to-b from-gray-300 to-gray-900 text-gray-900 px-2 pb-2">
                                <div className="flex justify-between mb-3 mt-1">
                                    <h1 className="text-2xl font-semibold">GitHub-Card</h1>
                                        <div className="flex">
                                            <i className='bx bxl-javascript text-3xl text-gray-800'></i>
                                            <i className='bx bxl-django text-3xl text-gray-800'></i>
                                        </div>
                                    </div>
                                    <div className="w-full justify-between flex">
                                        <p className="w-3xs text-sm mb-1">Generate stylish GitHub profile cards with your avatar, bio, and stats.</p>
                                        <div className="flex flex-col md:flex-row gap-1">
                                            <a href="https://github-cards-phi-two.vercel.app/"><i className='bx bx-link text-4xl md:text-2xl text-gray-900'></i></a>
                                            <a href="https://github.com/so-bhannn/GitHub-Card"><i className='bx bxl-github text-4xl md:text-2xl text-gray-900'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Project #2 */}
                        <a href="https://pricewise.store">
                            <div className="flex flex-col min-w-[296px] max-w-[352px] rounded-sm overflow-hidden hover:scale-105 transition-transform duration-400">
                                <img className="w-full" src="https://i.ibb.co/xpYkyHV/pricewise.jpg" alt="pricewise-preview"/>
                                <div className="bg-gradient-to-b from-gray-300 to-gray-900 text-gray-900 px-2 pb-2">
                                    <div className="flex justify-between mb-3 mt-1">
                                        <h1 className="text-2xl font-semibold">Pricewise</h1>
                                        <div className="flex">
                                            <i className='bx bxl-html5 text-3xl text-gray-800'></i>
                                            <i className='bx bxl-css3 text-3xl text-gray-800'></i>
                                            <i className='bx bxl-django text-3xl text-gray-800'></i>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <p className="w-3xs text-sm mb-1">A powerful tool for tracking, comparing, and analyzing prices across platforms.</p>
                                        <div className="flex flex-col md:flex-row">
                                            <a href="https://pricewise.store"><i className='bx bx-link text-4xl md:text-2xl text-gray-900'></i></a>
                                            <a href="https://github.com/so-bhannn/PriceWise"><i className='bx bxl-github text-4xl md:text-2xl text-gray-900'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Project #3 */}
                        <a href="https://github.com/Sahil-Mandal15/MedMate">
                            <div className="flex flex-col min-w-[296px] max-w-[352px] rounded-sm overflow-hidden hover:scale-105 transition-transform duration-400">
                                <img className="w-full h-[172px]" src="https://i.ibb.co/C3GLR4hn/Medmate.png" alt="medmate-preview"/>
                                <div className="bg-gradient-to-b from-gray-300 to-gray-900 text-gray-900 px-2 pb-2">
                                <div className="flex justify-between mb-3 mt-1">
                                    <h1 className="text-2xl font-semibold">Medmate-Backend</h1>
                                        <div className="flex ">
                                            <i className='bx bxl-django text-3xl text-gray-800'></i>
                                            <i className='bx bxl-firebase text-3xl text-gray-800'></i>
                                            <i className='bx bxl-gemini text-3xl text-gray-800'></i>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <p className="w-3xs text-sm mb-1">Your AI health guide for medical queries, medicine tracking, and doctor search.</p>
                                        <div className="flex flex-col md:flex-row gap-1">
                                            <a href="https://github.com/Sahil-Mandal15/MedMate"><i className='bx bxl-github text-4xl md:text-2xl text-gray-900'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>

                <section className="mt-15">
                    <h1 className="font-(family-name:--font-monasans) text-2xl font-semibold">
                        Have any Queries?
                    </h1>
                    <p className="text-xl text-white/80">
                        Feel free to reach me. You can email me at <a href="mailto:sobhanghosh.jsr@gmail.com" className="text-blue-400">sobhanghosh.jsr@gmail.com</a>
                    </p>
                </section>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
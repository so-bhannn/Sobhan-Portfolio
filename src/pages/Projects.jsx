import {
    Navbar,
    Footer,
} from '../components'

const Projects = () =>{
    return(
    <div className="w-full h-full flex justify-center text-white">
        <div className="w-3xl p-6 flex flex-col font-(family-name:--font-funnelsans)">
            <Navbar/>
            <div className='content flex-1 px-4'>
                    <h1 className='text-3xl font-(family-name:--font-monasans) font-semibold'>
                        Projects Showcase 🔮
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center font-(family-name:--font-funnelsans) py-5">
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
                                            <a href="https://git-hub-card-sigma.vercel.app/"><i className='bx bx-link text-4xl md:text-2xl text-gray-900'></i></a>
                                            <a href="https://github.com/so-bhannn/GitHub-Card"><i className='bx bxl-github text-4xl md:text-2xl text-gray-900'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    

                    {/* Project #2 */}
                    <a href="https://pricewise.store">
                        <div className="flex flex-col min-w-[296px] max-w-[352px] rounded-sm overflow-hidden hover:scale-105 transition-transform duration-400">
                                <img className="w-full" src="https://i.ibb.co/xpYkyHV/pricewise.jpg"/>
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
                                <img className="w-full h-[172px]" src="https://i.ibb.co/C3GLR4hn/Medmate.png" alt="project-photo"/>
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
                </div>
            <Footer/>
            </div>
        </div>
    )
}

export default Projects
import React from "react";

const Home = () => {
    return (
        <div className="bg-black w-full h-screen flex justify-center text-white">
            <div className="w-3xl p-6">
                <div className="flex justify-between mt-2.5">
                    <h1 className="text-2xl font-mono font-bold ">SOBHAN GHOSH</h1>
                    <div className="flex items-center gap-3 text-xl">
                        <a href="#">Projects</a>
                        <a href="#">Blog</a>
                        <a href="#">About</a>
                    </div>
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
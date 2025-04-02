import {
    Navbar,
    Footer,
} from "../components"

const Blogs = () => {
    return(
        <div className="w-full h-full flex justify-center text-white">
            <div className="w-3xl h-screen p-6 flex flex-col font-(family-name:--font-funnelsans)">
                <Navbar/>
                <div className="content flex-1 px-4">
                    <h1 className='text-3xl font-(family-name:--font-monasans) font-semibold'> 
                        Writings ✍
                    </h1>
                    <p className="text-xl text-white/80 py-5">
                        Writing my thoughts down is a work in progress...
                    </p>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Blogs
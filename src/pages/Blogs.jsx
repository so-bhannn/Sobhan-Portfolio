import {
    Navbar,
    Footer,
} from "../components"

const Blogs = () => {
    return(
        <div className="bg-black w-full h-full flex justify-center text-white">
            <div className="w-3xl h-screen p-6 flex flex-col font-(family-name:--font-funnelsans)">
                <Navbar/>
                <div className="content flex-1">
                    <h1 className="text-4xl text-center font-semibold"> 
                        Blogs
                    </h1>
                    <p className="text-xl text-center mt-4">
                        Coming Soon...
                    </p>
                </div>
                <Footer/>
            </div>
            </div>
    )
}

export default Blogs
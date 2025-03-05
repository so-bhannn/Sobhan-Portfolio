const Footer=()=>{
    return(
        <div className="w-full flex justify-between items-center pt-8">
            <p className="text-2xl md:text-xl text-white/70">© Sobhan</p>
            <ul className="flex justify-between mx-0 my-3 gap-2">
                <a href="https://github.com/so-bhannn" className="flex items-center md:gap-1">
                    <i className='bx bxl-github text-3xl md:text-2xl text-white/70 hover:text-white'></i>
                </a>
                <a href="https://www.linkedin.com/in/sobhan-ghosh-227033240" className="flex items-center md:gap-1">
                    <i className='bx bxl-linkedin text-3xl md:text-2xl text-white/70 hover:text-blue-500'></i>
                </a>
                <a href="https://x.com/so_bhann" className="flex items-center md:gap-1">
                    <i className='bx bxl-twitter text-3xl md:text-2xl text-white/70 hover:text-blue-300'></i>
                </a>
                <a href="https://www.instagram.com/so_bhann/" className="flex items-center md:gap-1">
                    <i className='bx bxl-instagram text-3xl md:text-2xl text-white/70 hover:text-rose-400'></i>
                </a>
            </ul>
        </div>
    )
}

export default Footer
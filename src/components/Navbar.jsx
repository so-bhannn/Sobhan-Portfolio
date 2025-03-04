import { useState } from "react";

const Navbar= ()=>{
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex justify-between items-center py-8 px-4">
        <a href="#">
            <div className=" w-30 h-15 overflow-hidden flex items-center">
                <img className="" src="https://i.ibb.co/20YVRtTF/SOBHAN-logo.png" alt="SOBHAN-logo" border="0"/>
            </div>
        </a>
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
                            <line x1="20" y1="1.5" x2="1.5" y2="20"></line>
                            <line x1="1.5" y1="1.5" x2="20" y2="20"></line>
                        </svg>
                    </div>
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-center min-h-[250px]">
                        <li className="border-b border-gray-400 my-8">
                            <a className="text-2xl" href="#">Projects</a>
                        </li>
                        <li className="border-b border-gray-400 my-8">
                            <a className="text-2xl" href="#">Blogs</a>
                        </li>
                        <li className="border-b border-gray-400 my-8">
                            <a className="text-2xl" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </section>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                <li>
                    <a className="text-2xl text-white hover:text-blue-400" href="#">Projects</a>
                </li>
                <li>
                    <a className="text-2xl text-white hover:text-blue-400" href="#">Blogs</a>
                </li>
                <li>
                    <a className="text-2xl text-white hover:text-blue-400" href="#">About</a>
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
        `}</style>
        </div>
    );
}

export default Navbar;
import {
    Navbar,
    Footer,
} from '../components'
import calculateAge from "../utility/calculateAge"

const About = () => {
    return(
        <div className="w-full h-full flex justify-center text-white">
            <div className="w-3xl h-screen p-6 flex flex-col font-(family-name:--font-funnelsans)">
                <Navbar/>
                <div className='content flex-1 px-4'>
                    <h1 className='text-3xl font-(family-name:--font-monasans) font-semibold'>
                        Hey, I'm Sobhan 👋
                    </h1>
                    <p className='text-xl text-white/80 py-5'>
                    Born {calculateAge()} days ago. Currently, I am in the third year of my undergraduate degree. Alongside my studies, I am working hard to be a better developer everyday.
                    </p>
                    <p className='text-xl text-white/80 py-5'>
                    I have a keen interest in web development and I am always eager to learn new technologies. I have experience in building web applications using React, Django and PostgreSQL. I am also familiar with cloud platforms like AWS and Firebase. 
                    </p>
                    <p className='text-xl text-white/80 py-5'>
                    If you want to get in touch, feel free to <a href="mailto:sobhanghosh.jsr@gmail.com" className='text-blue-400'>mail</a> me and I try to be active on <a href="https://x.com/so_bhann" className='text-blue-400'>X</a> as well.
                    </p>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default About;
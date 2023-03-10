import { motion } from "framer-motion";
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"

export const Contact = () => {

    return (
        <section
        className="w-full h-screen flex flex-col justify-center items-center"
        id="home"
        >
        <div className="lg:w-3/6 xs:w-5/6 mx-auto   ">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <h1 className="font-montserrat text-5xl text-blue font-bold">
                Let's build something great together!
                </h1>
                <p className="mt-10 mb-2 text-xl">Email me at:</p>
                <a className="mt-10 mb-7 text-xl underline hover:text-blue" href="mailto:minhajislam@outlook.de">minhajislam@outlook.de</a>

                <p className="mt-10 mb-2 text-xl"> Find me on:</p>

                <div className="flex items-center gap-5">
                    
                    <a href="https://www.linkedin.com/in/minhajislam//" target="_blank" rel="noreferrer">
                        <img className="w-10 hover:opacity-75" src={linkedin} alt="Linkedin icon"/>
                    </a>
                    <a href="https://github.com/minhajislam674/" target="_blank" rel="noreferrer">
                        <img className="w-10 hover:opacity-75" src={github} alt="Github icon"/>
                    </a>
                    <a href="https://www.instagram.com/minhajtakim/" target="_blank" rel="noreferrer">
                        <img className="w-10 hover:opacity-75" src={instagram} alt="Instagram icon"/>
                    </a>
                </div>

            </motion.div>
        </div>
    </section>
    )
}
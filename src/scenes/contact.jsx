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
        <div className="w-4/6 mx-auto md:h-full mt-12 md:mt-32">
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
                <h1 className="font-montserrat text-5xl font-bold">
                Let's chat
                </h1>

                <p className="mt-10 mb-7 text-sm text-center md:text-start" >
                minhajislam674@gmail.com
                </p>

                <div class="flex items-center">
                    <a href="https://instagram.com">
                        <img className="w-10" src={linkedin} alt="instagram icon"/>
                    </a>
                    <a href="https://instagram.com">
                        <img className="w-10" src={instagram} alt="instagram icon"/>
                    </a>
                    <a href="https://instagram.com">
                        <img className="w-10" src={github} alt="instagram icon"/>
                    </a>
                </div>

            </motion.div>

            <motion.div
                className="flex mt-5 justify-center md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
            </motion.div> 
        </div>
    </section>
    )
}
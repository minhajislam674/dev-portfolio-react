import { motion } from "framer-motion";
import { Link } from "react-scroll";



export const Home = ({setSelectedPage}) => {
    // const isAboveMediumScreeen = useMediaQuery("(max-width: 1060px)");

    return (
        <section
            className="w-full h-screen flex flex-col justify-center items-center"
            id="home"
        >
        <div className="w-4/6  mx-auto md:h-full mt-12 lg:mt-32 text-white ">
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
                Hi, I'm Minhaj
                </h1>

                <p className="w-4/6 mt-10 mb-7 font-montserrat text-xl md:text-start" >
                I'm a Full-stack Javascript developer based in Germany. I love to keep learning and evolving. I have a passion for working with cutting-edge technologies.
                </p>
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
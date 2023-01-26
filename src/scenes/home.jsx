import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Home = ({setSelectedPage}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const isAboveMediumScreeen = useMediaQuery("(max-width: 1060px)");

    return (
        <section
            className="w-full h-screen flex flex-col justify-center items-center"
            id="home"
        >
        
        <div className="lg:w-3/6 xs:w-5/6 mx-auto xs:mt-16 text-white ">
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
                <h1 style={{lineHeight: 1.5}} className="font-montserrat xs:text-xl md:text-3xl   ">
                👋🏼 Hi there, I’m Minhaj and I’m...
                </h1>

                <p style={{lineHeight: 1.2}} className="mt-5 mb-7 font-montserrat xs:text-2xl md:text-5xl leading-8 font-bold " >
                A Full-stack Javascript developer based in Germany. My passion is building simple and beautiful user experiences. I love to keep learning and evolving.
                </p>
 
                <NavLink to="/projects">
                    <button
                        type="button"
                        className="px-8 py-4 w-48 mr-5 bg-blue-light font-semibold text-deep-blue mt-5 hover:bg-white hover:text-black transition duration-500"
                    >  
                    SEE MY WORK
                    </button>
                </NavLink>
                    
            </motion.div>       
        </div>
        
    </section>

        
    )
}
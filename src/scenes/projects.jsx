import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import projectImg from '../assets/Project-one-01.jpg';
import projectImg2 from '../assets/Project-two-01.jpg';
import projectImg3 from '../assets/Project-three-01.jpg';

export const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="lg:w-3/6 xs:w-4/6 mx-auto  mt-12 xs:mt-32  text-white ">
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
                <h1 className="font-montserrat text-5xl font-bold mb-10">
                What i've been working on
                </h1>
            </motion.div>

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
                <div class="grid gap-10 lg:grid-cols-2 mb-16">
                    <div class="flex flex-col text-left">
                        <h1 class="text-4xl mb-2">OscarFlicks </h1>
                        <p class="text-xl leading-8">
                            OscarFlicks was a project I built as part of my full-stack web development program at CareerFoundry to demonstrate my mastery of full-stack JavaScript development. The goal of the project was to develop the complete server-side and client-side for the application from scratch.
                        </p>
                        <NavLink to="/projects/oscar-flicks">
                            <button
                                type="button"
                                className="px-8 py-4 w-48 mr-5 bg-blue-light font-semibold text-deep-blue mt-5 hover:bg-white hover:text-black transition duration-500"
                            >  
                            VIEW PROJECT
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <img 
                            src={projectImg}
                            alt="OscarFlicks"
                        />
                    </div>
                </div>
            </motion.div>

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
                <div class="grid gap-10 lg:grid-cols-2 mb-16">
                    <div>
                        <img
                            src={projectImg2}
                            alt="ChatMate App"
                        />
                    </div>



                    <div class="flex flex-col text-left ">
                        <h1 class="text-4xl mb-2">ChatMate App</h1>
                        <p class="text-xl leading-8">
                            ChatMate is an app for mobile devices built using React Native. The app provides users with a chat interface and options to share images and their location.
                        </p>
                        <NavLink to="/projects/chat-app">
                            <button
                                type="button"
                                className="px-8 py-4 w-48 mr-5 bg-blue-light font-semibold text-deep-blue mt-5 hover:bg-white hover:text-black transition duration-500"
                            >  
                            VIEW PROJECT
                            </button>
                        </NavLink>
                    </div>
                </div>
            </motion.div>

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
                <div class="grid gap-10 lg:grid-cols-2 mb-10">
                    <div class="flex flex-col text-left">
                        <h1 class="text-4xl mb-2">Meet App </h1>
                        <p class="text-xl leading-8">
                            Meet App is a serverless, progressive web application (PWA) built with React using 
                            a test-driven development (TDD). The app uses the Google Calendar API to fetch upcoming events. 
                            It provides users access to different tech events and workshops around the world.
                        </p>
                        <NavLink to="/projects/meet-app">
                            <button
                                type="button"
                                className="px-8 py-4 w-48 mr-5 bg-blue-light font-semibold text-deep-blue mt-5 hover:bg-white hover:text-black transition duration-500"
                            >  
                            VIEW PROJECT
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <img 
                            src={projectImg3}
                            alt="Meet App"
                        />
                    </div>
                </div>
            </motion.div>


            

            
        </div>
    )
}
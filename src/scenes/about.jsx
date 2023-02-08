import { motion } from "framer-motion";
import { useEffect } from "react";
import imageMinhaj from "../assets/minhaj-islam.jpeg"

export const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        
        <div className="lg:w-3/6 xs:w-5/6 mx-auto mt-12 xs:mt-32  text-white">
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
                <h1 className="mb-10 font-montserrat text-5xl font-bold  ">
                    About 
                </h1>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                    <h2 className="font-montserrat text-4xl font-bold text-blue-light ">
                        Why am I a developer?
                    </h2>
                    <p className="mt-2 mb-5 text-md  text-xl md:text-start leading-8" >
                        My journey as a developer began in the field of Environmental Science, where I spent countless hours delving into databases, analyzing climate data, and creating visualizations using R. It was during those tedious yet fulfilling moments that I discovered my love for programming languages and knew that I wanted to take my skills to the next level. And so, I made the transition into web development, and I couldn't be happier with my decision.
                    </p>
                    </div>
                    <div className="rounded-lg">
                        <img 
                            className="bg-cover bg-center w-64"
                            alt="Minhaj"
                            src={imageMinhaj}>
                        </img>
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

            <div className="mb-16">
                <h2 className="font-montserrat text-4xl mt-5 font-bold text-blue-light">
                    Personal Profile
                </h2>
                <p className="mt-2 mb-2 text-md text-xl md:text-start leading-8">
                📍 I was born and raised in Dhaka, Bangladesh. I moved to Kiel, Germany in 2018 where I did my Master, and then I moved to Essen in July 2022 where I'm currently living.
                </p>
                <p className="mt-2 mb-2 text-md text-xl md:text-start leading-8">
                🌏 I value intercultural exchanges! My broader goal in life is deepening my understanding about the ways of different cultures, and discovering the magic that the world has in store on different terrains. 
                </p>
                <p className="mt-2 mb-2 text-md text-xl md:text-start leading-8">          
                🎥 I have a passion for outdoor activities, particularly hiking and and I have a keen eye for capturing and sharing my adventures through <a rel="noreferrer" className=" hover:underline text-blue-light" href="https://www.youtube.com/@MinhajTakim/videos" target="_blank">videography</a>. 
                </p>
                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                📖 I enjoy reading books, particularly those by Haruki Murakami and Yuval Noah Harari.
                </p>
            </div>
            </motion.div>


                
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
                >

                <h2 className="font-montserrat text-4xl mb-5 font-bold text-blue-light">
                    What do I bring to the table?
                </h2>

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
                
                <div class="grid grid-cols-1 lg:grid-cols-2 "> 
                    <div className="rounded-lg p-2">
                        <h3 className="font-montserrat text-2xl  mt-2 underline-offset-5 underline underline-offset-8">Web Development Expertise</h3>
                        <p className="mt-2 mb-5 text-md text-xl md:text-start leading-8">
                        I completed 900+ hours of professional training in full-stack development with over 50 assignments
                        reviewed and approved by industry experts.
                        </p>     
                    </div>
                    <div className="rounded-lg  p-2">
                        <h3 className="font-montserrat text-2xl mt-2 underline underline-offset-8">Openness to learn</h3>
                        <p className="mt-2 mb-5 text-md text-xl md:text-start leading-8">
                        I firmly believe in the German adage 'Man lernt nie aus' and 
                        I’m always excited to work on new projects, 
                        because I learn something new every time.
                        </p>
                    </div>
                    <div className="rounded-lg  p-2 hover:border-3">
                        <h3 className="font-montserrat text-2xl  mt-2 underline underline-offset-8">Science Background</h3>
                        <p className="mt-2 mb-5 text-md text-xl md:text-start leading-8">
                        My master's degree in Environmental Management has provided me with a strong foundation in research
                         and data analytics, enabling me to approach technical challenges from a unique perspective.
                        </p>
                    </div>
                    <div className="rounded-lg  p-2">
                        <h3 className="font-montserrat text-2xl  mt-2 underline underline-offset-8">Film & Media Competence</h3>
                        <p className="mt-2 mb-5 text-md text-xl md:text-start leading-8">
                        I am a practitioner of Adobe Creative Cloud tools, and 
                        I have experience working in <a rel="noreferrer" className=" hover:underline text-blue-light" href="https://linktr.ee/minhaj_i" target="_blank"> media projects</a> including fundraising videos and 
                        behind-the-scenes content for universities.
                        </p>
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
                <h2 className="font-montserrat text-4xl mt-10 font-bold text-blue-light">
                    Skills & Tools
                </h2>

                <div className="flex flex-wrap gap-2 text-xl mt-5  mb-12">
                {['Javascript', 'Typescript', 'React', 'React Native', 'HTML', 'CSS', 'Angular', 'Bootstrap', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL','AWS', 'Firebase']
                    .map((item) => (
                    <p className="text-white p-2">{item}</p>
                ))}
                </div>
                </motion.div>

            
        </div>
    )
}
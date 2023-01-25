import { motion } from "framer-motion";
import { useEffect } from "react";
import imageMinhaj from "../assets/image-minhaj.jpg"

export const About = ({setSelectedPage}) => {

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
                    I have a passion for building things!
                </h1>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                    <h2 className="font-montserrat text-3xl font-bold">
                        My quick story
                    </h2>
                    <p className="mt-2 mb-5 text-md  text-xl md:text-start leading-8" >
                        My journey as a developer began in the field of Environmental Science, where I spent countless hours delving into databases, analyzing climate data, and creating visualizations using R. It was during those tedious yet fulfilling moments that I discovered my love for programming languages and knew that I wanted to take my skills to the next level. And so, I made the transition into web development, and I couldn't be happier with my decision.
                    </p>
                    </div>
                    <div className="rounded-lg">
                        <img 
                            className="rounded-2xl bg-cover bg-center w-72"
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
                <h2 className="font-montserrat text-3xl font-bold mt-10">
                    Skills & Tools
                </h2>

                <div className="flex flex-wrap gap-2 text-xl mt-5  mb-12">
                {['Javascript', 'Typescript', 'React', 'React Native', 'HTML', 'CSS', 'Angular', 'Bootstrap', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL','AWS', 'Firebase']
                    .map((item) => (
                    <p className="text-white p-2">{item}</p>
                ))}
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

                <h2 className="font-montserrat text-3xl font-bold mb-5">
                    What I bring to the table?
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
                        I am a certified web developer. I completed 900+ hours of professional training with over 50 assignments
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
                        My master's degree in Environmental Management has provided me with a strong foundation in critical thinking
                         and problem-solving, enabling me to approach technical challenges from a unique perspective.
                        </p>
                    </div>
                    <div className="rounded-lg  p-2">
                        <h3 className="font-montserrat text-2xl  mt-2 underline underline-offset-8">Experience in media production</h3>
                        <p className="mt-2 mb-5 text-md text-xl md:text-start leading-8">
                        With a passion for visual storytelling, 
                        I have collaborated on various media projects including <a rel="noreferrer" className=" underline  hover:text-blue-light" href="https://www.youtube.com/watch?v=_Aj9vZ_mCY0" target="_blank">fundraising videos</a> and 
                        behind-the-scenes <a rel="noreferrer"className=" underline  hover:text-blue-light" href="https://www.youtube.com/watch?v=8bbtqjnDtyQ" target="_blank">content for universities</a>.
                        </p>
                    </div>
                        {/* <div className="rounded-lg  p-2">
                            <h3 className="font-montserrat text-2xl  mt-2 underline underline-offset-8">When I'm not coding</h3>
                            <p className="mt-2 mb-5 text-md text-xl md:text-start">
                            I have a passion for outdoor activities, particularly hiking, 
                            and enjoy documenting my experiences through <a rel="noreferrer" className="text-blue-300 hover:underline" href="https://www.youtube.com/@MinhajTakim/videos" target="_blank">travel videography</a>. 
                            I also enjoy reading books, particularly those by Yuval Noah Harari.
                            </p>
                        </div> */}
                </div>
                <h2 className="font-montserrat text-3xl font-bold mt-5">
                    When I'm not coding
                </h2>

                <div className="rounded-lg  p-2">
                        <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                        I have a passion for outdoor activities, particularly hiking, 
                        and enjoy documenting my experiences through <a rel="noreferrer" className=" underline  hover:text-blue-light" href="https://www.youtube.com/@MinhajTakim/videos" target="_blank">travel videography</a>. 
                        I also enjoy reading books, particularly those by Yuval Noah Harari.
                </p>
                    </div>

                </motion.div>
                

            
        </div>
    )
}
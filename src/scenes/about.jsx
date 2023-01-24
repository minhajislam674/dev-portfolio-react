import { motion } from "framer-motion";
import { Link } from "react-scroll";


export const About = ({setSelectedPage}) => {


    return (
        <div className="w-4/6 mx-auto md:h-full mt-12 md:mt-32 text-white">
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
                    My quick story
                </h1>
                <p className="mt-5 text-md  text-xl md:text-start" >
                    My journey as a developer began in the field of Environmental Science, where I spent countless hours delving into databases, analyzing climate data, and creating visualizations using R. It was during those tedious yet fulfilling moments that I discovered my love for programming languages and knew that I wanted to take my skills to the next level. And so, I made the transition into web development, and I couldn't be happier with my decision.
                </p>
                <p className="mt-5 mb-10 text-md text-xl md:text-start">
                    I bring to the table a blend of analytical skills and technical expertise, honed by my experience in research and my proficiency in media design and Adobe Creative Cloud tools. My varied work experiences have allowed me to develop a well-rounded skillset and an analytical and creative mindset. I am eager to combine these skills with my web development expertise to create solutions that bring value to society.
                </p>

                <h1 className="font-montserrat text-5xl font-bold">
                    Skills
                </h1>

                <div className="flex flex-wrap gap-6 text-xl mt-5">
                {['Javascript', 'Typescript', 'React', 'React Native', 'HTML', 'CSS', 'Angular', 'Bootstrap', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL']
                    .map((item) => (
                    <p className="text-bg-dark p-2 bg-white">{item}</p>
                ))}
                </div>

                <div className="text-white py-4 px-6 mt-5 text-xl">

                    <div className="flex flex-wrap gap-4">
                    <div className="lg:w-1/3">
                        I am a lifelong learner
                        <p>
                        I am always eager to learn new technologies and stay up-to-date with the latest industry trends. I am a quick learner, and I can adapt to any situation and deliver high-quality results.
                        </p>
                        </div>
                        <div className="lg:w-1/3">
                        I have a Master's degree
                        <p>
                        I am always eager to learn new technologies and stay up-to-date with the latest industry trends. I am a quick learner, and I can adapt to any situation and deliver high-quality results.
                        </p>
                        </div>
                        <div className="lg:w-1/3">
                            When I am not coding
                            <p>
                        I am always eager to learn new technologies and stay up-to-date with the latest industry trends. I am a quick learner, and I can adapt to any situation and deliver high-quality results.
                        </p>
                        </div>

                    </div>
                </div>

            </motion.div>
        </div>
    )
}
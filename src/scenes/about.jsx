import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import imageMinhaj from "../assets/minhaj-islam.webp";
import caretDown from "../assets/caret-down-outline.svg";
import caretForward from "../assets/caret-forward-outline.svg";

export const About = () => {
  const [open, setOpen] = useState(false);
  const [caret, setCaret] = useState(caretForward);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = () => {
    setOpen(!open);
    if (caret === caretForward) {
      setCaret(caretDown);
    } else {
      setCaret(caretForward);
    }
  };

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
        <h1 className="mb-10 font-montserrat text-5xl text-blue font-bold  ">
          About
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2">
          <div>
            <h2 className="font-montserrat text-4xl font-bold text-blue-light">
              Why am I a developer?
            </h2>
            <p className="mt-2 mb-2 text-md  text-xl md:text-start leading-8">
              My journey as a developer began in the field of Environmental
              Science, where I spent countless hours delving into databases,
              analyzing climate data, and creating visualizations using R. It
              was during those tedious yet fulfilling moments that I discovered
              my love for programming languages and knew that I wanted to take
              my skills to the next level. And so, I made the transition into
              web development, and I couldn't be happier with my decision.
            </p>
          </div>
          <div className="rounded-lg">
            <img
              className="bg-cover bg-center w-64"
              alt="Minhaj"
              src={imageMinhaj}
            ></img>
          </div>
        </div>

        <div
          className="hover:text-blue flex hover:cursor-pointer mt-6 w-60"
          onClick={toggle}
        >
          <img src={caret} alt="More information"></img>
          <button className="font-montserrat text-xl font-bold underline-4 rounded-md transition duration-300 ease-in-out ">
            More about me...
          </button>
        </div>
      </motion.div>

      {open && (
        <div className="mb-16">
          {/* <h2 className="font-montserrat text-4xl mt-5 font-bold text-blue-light">
                        Personal Profile
                    </h2> */}
          <p className="mt-2 mb-2 text-md text-xl md:text-start leading-8">
            📍 Born and raised in Dhaka, Bangladesh, I moved to Germany in 2018
            for my Master's studies. I quickly fell in love with the language
            and way of life here, and I've called Germany home ever since.
          </p>
          <p className="mt-2 mb-2 text-md text-xl md:text-start leading-8">
            🌏 I value intercultural exchanges! My broader goal in life is
            deepening my understanding about the ways of different cultures, and
            discovering the magic that the world has in store on different
            terrains.
          </p>
          <p className="mt-2 mb-2 text-md text-xl md:text-start leading-8">
            🎥 I have a passion for outdoor activities, particularly hiking and
            and I have a keen eye for capturing and sharing my adventures
            through{" "}
            <a
              rel="noreferrer"
              className=" hover:text-blue underline"
              href="https://www.youtube.com/@MinhajTakim/videos"
              target="_blank"
            >
              videography
            </a>
            .
          </p>
          <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
            📖 I enjoy reading books, particularly those by Haruki Murakami and
            Yuval Noah Harari.
          </p>
        </div>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      ></motion.div>

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
          Skills
        </h2>
        <p className="mt-2 mb-5 text-xl md:text-start leading-8">
          I recevied full-stack software development training from a coding
          school in Berlin where I gained hands-on experience with full-stack
          JavaScript development, REST architecture, agile methodologies, and
          Test Driven Development (TDD) practice.
        </p>
        <p className="mt-2 mb-2 text-xl  font-bold md:text-start leading-8">
          I'm comfortable with:
        </p>

        <div className="flex flex-wrap gap-2 text-xl  mb-6">
          {[
            "Javascript",
            "HTML",
            "CSS",
            "React",
            "React Native",
            "Bootstrap",
            "Tailwind",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Prisma",
            "Git",
            "Jest",
            "Swagger",
          ].map((item, index) => (
            <p key={index} className="text-white italic pr-6">
              {item}
            </p>
          ))}
        </div>

        <p className="mt-2 mb-2 text-xl font-bold md:text-start leading-8">
          I'm currently exploring:
        </p>

        <div className="flex flex-wrap gap-2 text-xl  mb-12">
          {["TypeScript", "AWS", "GraphQL"].map((item, index) => (
            <p key={index} className="text-white italic pr-6">
              {item}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

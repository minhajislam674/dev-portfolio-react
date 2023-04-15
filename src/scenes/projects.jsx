import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import projectImg from "../assets/Project-one-01.jpg";
import projectImg2 from "../assets/Project-two-01.jpg";
import projectImg3 from "../assets/Project-three-01.jpg";
import projectImg4 from "../assets/Project-four-01.jpg";

export const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="xl:w-3/6 xs:w-5/6  mx-auto  mt-12 xs:mt-32  text-white ">
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
        <h1 className="font-montserrat text-5xl text-blue font-bold mb-10">
          What I've been building...
        </h1>
      </motion.div>

      {/* 1st Project */}

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
        <div className="grid gap-10 md:grid-cols-2 mb-24">
          <div className="flex flex-col text-left">
            <h1 className="text-4xl mb-2 font-bold text-blue-light">
              OscarFlicks App and REST API{" "}
            </h1>
            <p className="text-xl leading-8">
              With OscarFlicks, users can easily search and filter through a
              wide range of Oscar-winning films, view detailed information about
              each film, and even sign up to be able to add films to their list
              of favorites.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-5  mb-8">
              {["React", "Node.js", "Express", "MongoDB", "Bootstrap"].map(
                (item, index) => (
                  <p
                    key={index}
                    className="text-olive p-2 bg-white  font-bold  rounded-lg"
                  >
                    {item}
                  </p>
                )
              )}
            </div>
            <NavLink
              to="/projects/oscar-flicks"
              className="flex flex-row justify-center px-8 py-4 mr-5 border-solid font-semibold text-xl bg-blue-dark hover:bg-olive-light transition duration-500"
            >
              VIEW PROJECT
            </NavLink>
          </div>
          <div>
            <NavLink to="/projects/oscar-flicks">
              <img
                src={projectImg}
                alt="OscarFlicks"
                className="rounded-2xl hover:opacity-90 hover:cursor-pointer w-98"
              />
            </NavLink>
          </div>
        </div>
      </motion.div>

      {/* Bonus Project */}

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
        <div className="grid gap-10 md:grid-cols-2 mb-24">
          <div className="flex flex-col text-left">
            <h1 className="text-4xl mb-2 font-bold text-blue-light">
              BookHive{" "}
            </h1>
            <p className="text-xl leading-8">
              BookHive is a platform that offers bookworms to browse and manage
              their reading list. The app is developed on top of server-side
              code and incorporates a REST API and a PostgreSQL database.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-5  mb-8">
              {[
                "Angular",
                "TypeScript",
                "Material UI",
                "PostgreSQL",
                "Prisma",
                "Node.js",
                "Express",
              ].map((item, index) => (
                <p
                  key={index}
                  className="text-olive p-2 bg-white  font-bold  rounded-lg"
                >
                  {item}
                </p>
              ))}
            </div>
            <NavLink
              to="/projects/bookhive-app"
              className="flex flex-row justify-center px-8 py-4 mr-5 border-solid font-semibold text-xl bg-blue-dark hover:bg-olive-light transition duration-500"
            >
              VIEW PROJECT
            </NavLink>
          </div>
          <div>
            <NavLink to="/projects/bookhive-app">
              <img
                src={projectImg4}
                alt="bookhive-app"
                className="rounded-2xl hover:opacity-90 hover:cursor-pointer w-98"
              />
            </NavLink>
          </div>
        </div>
      </motion.div>

      {/* 2nd Project */}

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
        <div className="grid gap-10 md:grid-cols-2 mb-24">
          <div className="flex flex-col text-left ">
            <h1 className="text-4xl mb-2 font-bold text-blue-light">
              ChatMate App
            </h1>
            <p className="text-xl leading-8">
              ChatMate is an app for mobile devices built using React Native.
              The app provides users with a chat interface and options to share
              images and their location.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-5  mb-8">
              {["React Native", "Expo", "GiftedChat", "Firebase"].map(
                (item, index) => (
                  <p
                    key={index}
                    className="text-olive p-2 bg-white  font-bold rounded-lg"
                  >
                    {item}
                  </p>
                )
              )}
            </div>

            <NavLink
              to="/projects/chat-app"
              className="flex flex-row justify-center px-8 py-4 mr-5 border-solid  font-semibold text-xl bg-blue-dark hover:bg-olive-light transition duration-500"
            >
              VIEW PROJECT
            </NavLink>
          </div>
          <div>
            <NavLink to="/projects/chat-app">
              <img
                src={projectImg2}
                alt="ChatMate App"
                className="rounded-2xl hover:opacity-90 hover:cursor-pointer"
              />
            </NavLink>
          </div>
        </div>
      </motion.div>

      {/* 3rd Project */}

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
        <div className="grid gap-10 md:grid-cols-2 mb-10">
          <div className="flex flex-col text-left">
            <h1 className="text-4xl mb-2 font-bold text-blue-light">
              Meet App{" "}
            </h1>
            <p className="text-xl leading-8">
              Meet App is a serverless, progressive web application (PWA) built
              with React using a test-driven development (TDD). The app uses the
              Google Calendar API to fetch upcoming events. It provides users
              access to different tech events and workshops around the world.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-5  mb-8">
              {["React", "AWS Lambda", "Jest", "Enzyme", "Pupeeteer"].map(
                (item, index) => (
                  <p
                    key={index}
                    className="text-olive p-2 bg-white font-bold  rounded-lg"
                  >
                    {item}
                  </p>
                )
              )}
            </div>

            <NavLink
              to="/projects/meet-app"
              className="flex flex-row justify-center px-8 py-4 mr-5 border-solid font-semibold text-xl  bg-blue-dark hover:bg-olive-light transition duration-500"
            >
              VIEW PROJECT
            </NavLink>
          </div>
          <div>
            <NavLink to="/projects/meet-app">
              <img
                src={projectImg3}
                alt="Meet App"
                className="rounded-2xl hover:opacity-90 hover:cursor-pointer "
              />
            </NavLink>
          </div>
        </div>
      </motion.div>

      {/* 4th Project */}

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
        <div className="grid gap-10 md:grid-cols-1 mb-10">
          <h3 className="text-2xl leading-8">
            ...and much more. Visit my{" "}
            <a
              href="https://github.com/minhajislam674"
              target="_blank"
              rel="noopener noreferrer"
              className="hover: text-blue hover:underline"
            >
              GitHub
            </a>{" "}
            profile to see more of my work.
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

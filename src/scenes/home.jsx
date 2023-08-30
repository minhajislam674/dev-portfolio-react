import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import externalLinkIcon from "../assets/external-link.svg";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const isAboveMediumScreeen = useMediaQuery("(max-width: 1060px)");

  return (
    <>
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
            <h1
              style={{ lineHeight: 1.5 }}
              className="font-montserrat xs:text-xl md:text-3xl text-blue"
            >
              👋🏼 Hi there, I’m Minhaj and I’m...
            </h1>

            <p
              style={{ lineHeight: 1.2 }}
              className="mt-5 mb-7 font-montserrat xs:text-2xl md:text-5xl leading-8 font-bold "
            >
              A full-stack developer based in Germany. My passion is building
              clean, accessible, and responsive web applications.
            </p>
            <div className="flex gap-3 lg:flex-row xs:flex-col">
              <NavLink to="/projects">
                <button
                  type="button"
                  className="py-3 w-48 h-18 mr-5  font-semibold md:text-xl text-white  bg-blue-dark  hover:bg-olive-light hover:text-#7ed6df transition duration-500"
                >
                  SEE MY WORK
                </button>
              </NavLink>

              <a
                href="https://www.linkedin.com/in/minhajislam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center py-2 w-48 gap-3 items-center border-2 font-semibold md:text-xl text-white  hover:bg-olive-light transition duration-500"
              >
                <button>LINKEDIN</button>
                <img src={externalLinkIcon} alt="external link icon" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};


import { Link } from "react-scroll";
export const Footer = ({selectedPage, setSelectedPage}) => {
  return (
    <footer className="h-40 bg-blue pt-5">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between">
          <p className="font-montserrat text-sm text-white md:justify-end text-left">
            <span className="font-bold text-lg" >Md Minhaj Ul Islam</span>
            <br></br>
            ©2022. Built and designed by Md Minhaj Ul Islam
          </p>
          
        <div className="flex flex-wrap w-40" >
            <p className="font-montserrat text-sm text-white">
                Links
            </p>
          <div className="md:justify-between">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setSelectedPage("home")}
            style={{cursor: "pointer"}}
        >
            Home
            </Link>
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setSelectedPage("about")}
                style={{cursor: "pointer"}}
            >
                About
            </Link>
            <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setSelectedPage("projects")}
                style={{cursor: "pointer"}}
            >
                Projects
            </Link>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setSelectedPage("contact")}
                style={{cursor: "pointer"}}
            >
                Contact
            </Link>
          </div>

          </div>
          <p className="font-montserrat text-sm text-white">
            Get in touch
          </p>
        </div>
      </div>
    </footer>
  );
};

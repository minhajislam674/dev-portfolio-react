// import useMediaQuery from "../hooks/useMediaQuery";
import { NavLink } from "react-router-dom";
import './navbar.css';


const Navbar = ({isTopOfPage}) => {
    // const isDesktop = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-bg-dark";

    return (
        <nav className={`${navbarBackground} divide-y divide-dashed z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6 ">
            <NavLink className="font-opensans font-semibold md:text-xl text-blue-light underline-offset-8" to="/">MINHAJ</NavLink>
            <div className="flex justify-between xs:gap-5 font-opensans no-underline md:text-xl font-semibold">

                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="p-2 hover:underline underline-offset-8"
                >
                    About
                </NavLink>
                <NavLink
                    to="/projects"
                    activeClassName="active"
                    className="p-2 hover:underline underline-offset-8"
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    activeClassName="active"
                    className="p-2 hover:underline underline-offset-8"
                >
                    Contact
                </NavLink>

                <a
                    href={require("../assets/Islam-Minhaj-Resume.pdf")}
                    className="p-2 border-solid border-2 border-blue-light font-semibold text-blue-light  hover:bg-blue hover:text-black transition duration-500"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resume
                </a>
            </div>
            </div>
        </nav>



    )

}

export default Navbar;
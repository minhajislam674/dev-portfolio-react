// import useMediaQuery from "../hooks/useMediaQuery";
import { NavLink } from "react-router-dom";
import './navbar.css';


const Navbar = ({isTopOfPage}) => {
    // const isDesktop = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-bg-dark";

    return (
        <nav className={`${navbarBackground} divide-y divide-dashed z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6 ">
            <NavLink className="font-opensans font-semibold md:text-xl" to="/">MINHAJ</NavLink>
            <div className="flex justify-between xs:gap-5 font-opensans no-underline md:text-xl font-semibold">

                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="hover:underline underline-offset-8"
                >
                    About
                </NavLink>
                <NavLink
                    to="/projects"
                    activeClassName="active"
                    className="hover:underline underline-offset-8"
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    activeClassName="active"
                    className="hover:underline underline-offset-8"
                >
                    Contact
                </NavLink>
            </div>
            </div>
        </nav>



    )

}

export default Navbar;
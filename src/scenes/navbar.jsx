import useMediaQuery from "../hooks/useMediaQuery";
import closeIcon from '../assets/close-icon.svg'
import menuIcon from '../assets/menu-icon.svg'
import { NavLink } from "react-router-dom";
import navbar from './navbar.css';


const Navbar = ({isTopOfPage}) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-blue-light";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-playfair text-3xl font-bold">MINHAJ.DEV</h4>
            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                <NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    className="hover:text-yellow"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="hover:text-yellow"
                >
                    About
                </NavLink>
                <NavLink
                    to="/projects"
                    activeClassName="active"
                    className="hover:text-yellow"
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    activeClassName="active"
                    className="hover:text-yellow"
                >
                    Contact
                </NavLink>
            </div>
            </div>
        </nav>



    )

}

export default Navbar;
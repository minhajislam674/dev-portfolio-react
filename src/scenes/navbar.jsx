import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { NavLink } from "react-router-dom";
import closeicon from "../assets/close-icon.svg";
import menuicon from "../assets/menu-icon.svg";
import './navbar.css';


const Navbar = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [isMenuToggled, setIsMenuToggled] = useState(false);


    return (
        <nav className={`z-40 w-full bg-bg-dark  fixed top-0 py-6`}>
          <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-playfair text-3xl font-bold text-white">
              <NavLink
                      to="/"
                      className="site-icon"
              >
                MI
              </NavLink>
            </h4>
    
            {/* DESKTOP NAV */}
            {isDesktop ? (
              <div className=" flex justify-between gap-16 font-opensans text-xl font-semibold text-white">
                <NavLink
                    to="/"
                    className="hover:underline decoration-blue underline-offset-8"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className="hover:underline decoration-blue underline-offset-8"

                >
                    About   
                </NavLink>
                <NavLink
                    to="/projects"
                    className="hover:underline decoration-blue underline-offset-8"

                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    className="hover:underline decoration-blue underline-offset-8"

                >
                    Contact
                </NavLink>

              </div>
              
            ) : (
              <button
                className="rounded-full bg-red p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <img alt="menu-icon" src={menuicon}/>
              </button>
              
            )}
    
            {/* MOBILE MENU POPUP */}
            {!isDesktop && isMenuToggled && (
              <div className="fixed right-0 bottom-0 h-full bg-olive w-[50%]">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img alt="close-icon" src={closeicon} />
                  </button>
                </div>
    
                {/* MENU ITEMS */}
                <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                    <NavLink
                        to="/"
                        className="hover:underline decoration-blue underline-offset-8"
                        onClick={() => setIsMenuToggled(false)}
                        
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="hover:underline decoration-blue underline-offset-8"
                        onClick={() => setIsMenuToggled(false)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className="hover:underline decoration-blue underline-offset-8"
                        onClick={() => setIsMenuToggled(false)}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="hover:underline decoration-blue underline-offset-8"
                        onClick={() => setIsMenuToggled(false)}
                    >
                        Contact
                    </NavLink>
                </div>
              </div>
            )}
          </div>
        </nav>
      );
    };

export default Navbar;
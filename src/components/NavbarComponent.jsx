import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  const [active, setActive] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const location = useLocation();
  console.log(location);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  function toggleClass() {
    setActive(!active);
  }
  return (
    <>
      <nav className={`${changeColor ? "navbar active" : "navbar"} ${location.pathname == "/" ? "text-white" : ""}`}>
        <a href="/" className={`navbar-logo ${location.pathname === "/" && "text-white"}`}>
          SENAYA CREATIVE
        </a>
        <div className={`${active ? "navbar-nav active" : "navbar-nav"}`}>
          <NavLink to="/" className={`${({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} ${location.pathname === "/" && !changeColor && "text-white"}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={`${({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} ${location.pathname === "/" && !changeColor && "text-white"}`}>
            About
          </NavLink>
          <NavLink to="/portfolio" className={`${({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} ${location.pathname === "/" && !changeColor && "text-white"}`}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={`${({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} ${location.pathname === "/" && !changeColor && "text-white"}`}>
            Contact Us
          </NavLink>
        </div>
        <div className="navbar-extra">
          <div id="hamburger-menu" onClick={toggleClass}>
            <i className="fa-solid fa-bars fa-xl"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;

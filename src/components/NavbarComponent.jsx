import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  const [active, setActive] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

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
      <nav className={changeColor === true ? "navbar active" : "navbar"}>
        <a href="/" className="navbar-logo">
          SENAYA CREATIVE
        </a>
        <div className={active ? "navbar-nav active" : "navbar-nav"}>
          <NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
            Contact Us
          </NavLink>
        </div>
        <div className="navbar-extra">
          <a href="#" id="hamburger-menu" onClick={toggleClass}>
            <i className="fa-solid fa-bars fa-xl"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;

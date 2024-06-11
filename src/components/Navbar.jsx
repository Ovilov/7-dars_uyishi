// icons
import { FiSun, FiMoon } from "react-icons/fi";

// react router doms
import { Link } from "react-router-dom";

// components
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Navbar() {
  const { color } = useContext(GlobalContext);
  const [theme, setTheme] = useState(themeFromLocalStorage);

  const handleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="mb-10" style={{ backgroundColor: color }}>
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link className="btn btn-secondary font-bold text-2xl" to="/">
            My store
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onClick={handleTheme}
              type="checkbox"
              checked={theme == "dracula"}
              readOnly
            />

            {/* sun icon */}
            <FiSun className="swap-on fill-current w-10 h-10" />

            {/* moon icon */}
            <FiMoon className="swap-off fill-current w-10 h-10" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

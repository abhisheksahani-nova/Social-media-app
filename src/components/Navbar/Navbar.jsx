import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar navbar-container mb-0">
      <div className="nav-innerContainer font-clr">
        <h2 className="nav-heading mr-4 nav-custom-sty">Social Cloud.</h2>
      </div>

      <div className="nav-innerContainer font-clr width-auto">
        <input className="nav_searchBar" type="text" />
        <span className="searchBar_icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>

      <div className="nav-innerContainer nav-icon-container width-reset inherit-clr mr-1">
        <div className="flex-col-center">
          <a className="font-clr" href="/">
            <i class="fa-solid fa-moon"></i>
          </a>
          <small>Theme</small>
        </div>

        <div className="flex-col-center">
          <a className="font-clr" href="/">
            <i className="fa-solid fa-user"></i>
          </a>
          <small>Profile</small>
        </div>

        <div className="flex-col-center">
          <button
            className="btn btn-custom-sty"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

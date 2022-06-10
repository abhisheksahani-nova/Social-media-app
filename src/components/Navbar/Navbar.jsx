import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { FilterDropdown } from "../index";

function Navbar({ setShowSidebar, windowWidth }) {
  const navigate = useNavigate();
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const token = localStorage.getItem("token");

  function handleAuth() {
    if (token) {
      localStorage.clear();
      navigate("/");
    } else {
      navigate("/login");
    }
  }

  return (
    <nav className="nav-bar navbar-container mb-0">
      <div className="nav-innerContainer align-item-center nav-title-container font-clr">
        {windowWidth <= 810 && (
          <i
            class="fa-solid fa-bars"
            onClick={() => setShowSidebar((prev) => !prev)}
          ></i>
        )}
        <h2 className="nav-heading mr-4 nav-custom-sty">Social Cloud.</h2>
      </div>

      {isFilterDropdownOpen && (
        <FilterDropdown setIsFilterDropdownOpen={setIsFilterDropdownOpen} />
      )}

      <div className="nav-innerContainer font-clr width-auto nav-input-container">
        <input className="nav_searchBar" type="text" />
        <span className="searchBar_icon">
          <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
        </span>
      </div>

      <div className="nav-innerContainer align-item-center nav-icon-container width-reset inherit-clr mr-1">
        <div className="flex-col-center">
          <a className="font-clr" href="/">
            <i class="fa-solid fa-moon"></i>
          </a>
          <small className="nav-theme-title">Theme</small>
        </div>

        <div className="flex-col-center">
          <button
            className="btn pri-outline-btn"
            onClick={() => setIsFilterDropdownOpen((prev) => !prev)}
          >
            Filter
          </button>
        </div>

        <div className="flex-col-center">
          <button className="btn btn-custom-sty" onClick={() => handleAuth()}>
            {token ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

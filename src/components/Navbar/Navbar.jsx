import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { FilterDropdown } from "../index";
import { toggleTheme } from "../../features/users/usersSlice";
import { useSelector, useDispatch } from "react-redux";

function Navbar({ setShowSidebar, windowWidth, isLanding, setSearchQuery }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.users.theme);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const token = localStorage.getItem("token");

  function handleAuth() {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("name");
      navigate("/");
    } else {
      navigate("/login");
    }
  }

  return (
    <nav
      className={`nav-bar navbar-container mb-0 ${
        theme == "dark" && "text-dark-theme-clr border-gray4-dark"
      }`}
    >
      <div className="nav-innerContainer align-item-center nav-title-container font-clr">
        {windowWidth <= 810 && (
          <i
            className="fa-solid fa-bars hamburger-icon"
            onClick={() => setShowSidebar((prev) => !prev)}
          ></i>
        )}
        <h2
          className={`nav-heading mr-4 nav-custom-sty ${
            theme == "dark" && "text-dark-theme-clr"
          }`}
        >
          Social
        </h2>
      </div>

      {isFilterDropdownOpen && (
        <FilterDropdown setIsFilterDropdownOpen={setIsFilterDropdownOpen} />
      )}

      {!isLanding && (
        <div className="nav-innerContainer font-clr width-auto nav-input-container">
          <input
            className={`nav_searchBar ${
              theme == "dark" && "dark-theme-bg-clr border-gray3-dark"
            }`}
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span
            className={`searchBar_icon ${theme == "dark" && "btn-custom-sty"}`}
          >
            <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
          </span>
        </div>
      )}

      <div className="nav-innerContainer align-item-center nav-icon-container width-reset inherit-clr mr-1">
        <div
          className={`flex-col-center ${isLanding && "ml-5"}`}
          onClick={() => dispatch(toggleTheme())}
        >
          <i
            className={`fa-solid ${theme == "light" ? "fa-moon" : "fa-sun"}`}
          ></i>

          <small className="nav-theme-title">
            {theme == "light" ? "dark" : "light"}
          </small>
        </div>

        {!isLanding && (
          <div className="flex-col-center">
            <button
              className={`btn pri-outline-btn ${
                theme == "dark" && "dark-theme-bg-clr border-white"
              }`}
              onClick={() =>
                token
                  ? setIsFilterDropdownOpen((prev) => !prev)
                  : navigate("/login")
              }
            >
              Filter
            </button>
          </div>
        )}

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

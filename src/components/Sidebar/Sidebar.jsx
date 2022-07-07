import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function Sidebar() {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const theme = useSelector((state) => state.users.theme);
  const signInUser = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  const currentUser = users.filter((user) => user.username == signInUser);

  return (
    <div className="videolib-drawer-container viewport-height-100">
      <ul className="videolib-list">
        <li
          className={`videolib-list-item sidebar-list ${
            theme == "dark" && "text-dark-theme-clr"
          }`}
          onClick={() => navigate("/home")}
        >
          <i className="fa-solid fa-house videolib-drawer-icon"></i> Home
        </li>
        <li
          className={`videolib-list-item sidebar-list ${
            theme == "dark" && "text-dark-theme-clr"
          }`}
          onClick={() => navigate(token ? "/explore" : "/login")}
        >
          <i className="fa-solid fa-compass videolib-drawer-icon"></i> Explore
        </li>
        <li
          className={`videolib-list-item sidebar-list ${
            theme == "dark" && "text-dark-theme-clr"
          }`}
          onClick={() => navigate(token ? "/bookmarks" : "/login")}
        >
          <i className="fa-solid fa-bookmark videolib-drawer-icon"></i>{" "}
          Bookmarks
        </li>

        <li
          className={`videolib-list-item sidebar-list ${
            theme == "dark" && "text-dark-theme-clr"
          }`}
          onClick={() =>
            navigate(token ? `/profile/${currentUser[0]._id}` : "/login")
          }
        >
          <i className="fa-solid fa-user videolib-drawer-icon"></i> Profile
        </li>

        <li
          className={`videolib-list-item sidebar-list ${
            theme == "dark" && "text-dark-theme-clr"
          }`}
          onClick={() => navigate(token ? "/archive" : "/login")}
        >
          <i className="fa-solid fa-box-archive videolib-drawer-icon"></i>
          Archive
        </li>
        <li
          className={`videolib-list-item sidebar-list ${
            theme == "dark" && "text-dark-theme-clr"
          }`}
          onClick={() => navigate(token ? "/draft" : "/login")}
        >
          <i className="fa-solid fa-envelope-open videolib-drawer-icon"></i>
          Draft
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

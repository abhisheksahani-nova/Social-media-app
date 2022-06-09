import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="videolib-drawer-container viewport-height-100">
      <ul className="videolib-list">
        <li
          className="videolib-list-item sidebar-list"
          onClick={() => navigate("/")}
        >
          <i className="fa-solid fa-house videolib-drawer-icon"></i> Home
        </li>
        <li
          className="videolib-list-item sidebar-list"
          onClick={() => navigate("/explore")}
        >
          <i className="fa-solid fa-compass videolib-drawer-icon"></i> Explore
        </li>
        <li
          className="videolib-list-item sidebar-list"
          onClick={() => navigate("/bookmarks")}
        >
          <i className="fa-solid fa-bookmark videolib-drawer-icon"></i>{" "}
          Bookmarks
        </li>
        <li className="videolib-list-item sidebar-list">
          <i className="fa-solid fa-user videolib-drawer-icon"></i> Profile
        </li>
        <li
          className="videolib-list-item sidebar-list"
          onClick={() => navigate("/archive")}
        >
          <i className="fa-solid fa-box-archive videolib-drawer-icon"></i>
          Archive
        </li>
        <li
          className="videolib-list-item sidebar-list"
          onClick={() => navigate("/draft")}
        >
          <i className="fa-solid fa-envelope-open videolib-drawer-icon"></i>
          Draft
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

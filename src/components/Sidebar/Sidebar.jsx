import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="videolib-drawer-container viewport-height-100">
      <ul className="videolib-list">
        <li className="videolib-list-item sidebar-list">
          <i className="fa-solid fa-house videolib-drawer-icon"></i> Home
        </li>
        <li className="videolib-list-item sidebar-list">
          <i className="fa-solid fa-compass videolib-drawer-icon"></i> Explore
        </li>
        <li className="videolib-list-item sidebar-list">
          <i className="fa-solid fa-bookmark videolib-drawer-icon"></i>{" "}
          Bookmarks
        </li>
        <li className="videolib-list-item sidebar-list">
          <i className="fa-solid fa-user videolib-drawer-icon"></i> Profile
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

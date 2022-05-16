import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="videolib-drawer-container viewport-height-100">
      <ul className="videolib-list">
        <li className="videolib-list-item sidebar-list">
          <i className="fa-solid fa-lightbulb videolib-drawer-icon"></i> Notes
        </li>
        <li className="videolib-list-item sidebar-list">
          <i className="fa-solid fa-tag videolib-drawer-icon"></i> Labels
        </li>
        <li className="videolib-list-item sidebar-list">
          <i className="fa-solid fa-box-archive videolib-drawer-icon"></i> Archive
        </li>
        <li className="videolib-list-item sidebar-list">
          <i className="fa-solid fa-trash-can videolib-drawer-icon"></i> Trash
        </li>
        <li className="videolib-list-item sidebar-list">
          <i className="fa-solid fa-pencil videolib-drawer-icon"></i>
          Edit labels
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div class="videolib-drawer-container viewport-height-100">
      <ul class="videolib-list">
        <li class="videolib-list-item sidebar-list">
          <i class="fa-solid fa-lightbulb videolib-drawer-icon"></i> Notes
        </li>
        <li class="videolib-list-item sidebar-list">
          <i class="fa-solid fa-tag videolib-drawer-icon"></i> Labels
        </li>
        <li class="videolib-list-item sidebar-list">
          <i class="fa-solid fa-box-archive videolib-drawer-icon"></i> Archive
        </li>
        <li class="videolib-list-item sidebar-list">
          <i class="fa-solid fa-trash-can videolib-drawer-icon"></i> Trash
        </li>
        <li class="videolib-list-item sidebar-list">
          <i class="fa-solid fa-pencil videolib-drawer-icon"></i>
          Edit labels
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

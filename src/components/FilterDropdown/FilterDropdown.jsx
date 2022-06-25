import React, { useState } from "react";
import "../PostDropdown/PostDropdown.css";
import "./FilterDropdown.css";
import { sortByMostLiked, sortByLatest } from "../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";

function FilterDropdown({ setIsFilterDropdownOpen }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const theme = useSelector((state) => state.users.theme);

  function handleMostLikedPost() {
    dispatch(sortByMostLiked({ posts }));
    setIsFilterDropdownOpen((prev) => !prev);
  }

  function handleLatestPost() {
    dispatch(sortByLatest({ posts }));
    setIsFilterDropdownOpen((prev) => !prev);
  }

  return (
    <div className="playlist-dropdown-container">
      <ul
        className={`stacked-list list-style-none playlist-stacklist add-new-label-dropdown p-small ${
          theme == "dark" && "dark-theme-bg-clr"
        }`}
      >
        <li
          className={`d-flex playlist-li-item videolib-list-container border-bottom j-space-between mb-small`}
        >
          <h5 className="break-word">Sort By</h5>
          <i
            className="fa-solid fa-rectangle-xmark cursor-p"
            onClick={() => setIsFilterDropdownOpen((prev) => !prev)}
          ></i>
        </li>

        <li
          className="d-flex playlist-li-item cursor-p j-space-between"
          onClick={() => handleLatestPost()}
        >
          <small className="break-word">Latest post</small>
        </li>

        <li
          className="d-flex playlist-li-item cursor-p j-space-between"
          onClick={() => handleMostLikedPost()}
        >
          <small className="break-word">Most liked post</small>
        </li>
      </ul>
    </div>
  );
}

export default FilterDropdown;

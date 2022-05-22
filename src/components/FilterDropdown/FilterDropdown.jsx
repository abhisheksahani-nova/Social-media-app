import React, { useState } from "react";
import "../PostDropdown/PostDropdown.css";
import "./FilterDropdown.css";
import { sortByMostLiked } from "../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";

function FilterDropdown({ setIsFilterDropdownOpen }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  function handleMostLikedPost() {
    dispatch(sortByMostLiked({ posts }));
    setIsFilterDropdownOpen((prev) => !prev);
  }

  return (
    <ul
      className={`stacked-list list-style-none playlist-stacklist select-label-dropdown p-small`}
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

      <li className="d-flex playlist-li-item cursor-p j-space-between">
        <small className="break-word">Latest post</small>
      </li>

      <li
        className="d-flex playlist-li-item cursor-p j-space-between"
        onClick={() => handleMostLikedPost()}
      >
        <small className="break-word">Most liked post</small>
      </li>
    </ul>
  );
}

export default FilterDropdown;

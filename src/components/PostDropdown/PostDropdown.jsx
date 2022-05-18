import React from "react";
import "./PostDropdown.css";
import { deletePost } from "../../features/posts/postsSlice.js";
import { useDispatch } from "react-redux";

function PostDropdown({ setIsDropdownOpen, id, setIsPostEdit, setEditPostId }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  function handleDeletePost(id, token) {
    dispatch(deletePost({ id, token }));
    setIsDropdownOpen((prev) => !prev);
  }

  function handleEditPost(id) {
    setIsPostEdit((prev) => !prev);
    setEditPostId(id);
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <div className="playlist-dropdown-container">
      <ul
        className={`stacked-list list-style-none playlist-stacklist add-new-label-dropdown p-small`}
      >
        <li
          className={`d-flex playlist-li-item videolib-list-container border-bottom j-space-between`}
        >
          <h5 className="break-word">Select</h5>
          <i
            className="fa-solid fa-rectangle-xmark cursor-p"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          ></i>
        </li>

        <li className="d-flex playlist-li-item mt-small cursor-p j-space-between">
          <small className="break-word" onClick={() => handleEditPost(id)}>
            Edit post
          </small>
          <i class="fa-solid fa-pencil post-dropdown-icon"></i>
        </li>

        <li
          className="d-flex playlist-li-item cursor-p j-space-between"
          onClick={() => handleDeletePost(id, token)}
        >
          <small className="break-word">Delete post</small>
          <i class="fa-solid fa-trash post-dropdown-icon"></i>
        </li>
      </ul>
    </div>
  );
}

export default PostDropdown;

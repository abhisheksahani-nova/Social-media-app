import React from "react";
import "./PostDropdown.css";
import { deletePost } from "../../features/posts/postsSlice.js";
import { deleteCommentOfPost } from "../../features/comments/commentsSlice";
import { useDispatch } from "react-redux";

function PostDropdown({
  setIsDropdownOpen,
  id,
  setIsPostEdit,
  setEditPostId,
  isCommentDropdownOpen,
  setIsCommentDropdownOpen,
  postId,
  commentId,
}) {
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

  function handleCloseDropdown() {
    if (isCommentDropdownOpen) {
      setIsCommentDropdownOpen((prev) => !prev);
    } else {
      setIsDropdownOpen((prev) => !prev);
    }
  }

  function handleDelete(id, token, postId, commentId) {
    if (isCommentDropdownOpen) {
      dispatch(deleteCommentOfPost({ postId, commentId, token }));
      setIsCommentDropdownOpen((prev) => !prev);
    } else {
      handleDeletePost(id, token);
    }
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
            onClick={() => handleCloseDropdown()}
          ></i>
        </li>

        <li
          className="d-flex playlist-li-item mt-small cursor-p j-space-between"
          onClick={() => handleEditPost(id)}
        >
          <small className="break-word">
            {`Edit ${isCommentDropdownOpen ? "comment" : "post"}`}
          </small>
          <i class="fa-solid fa-pencil post-dropdown-icon"></i>
        </li>

        <li
          className="d-flex playlist-li-item cursor-p j-space-between"
          onClick={() => handleDelete(id, token, postId, commentId)}
        >
          <small className="break-word">{`Delete ${
            isCommentDropdownOpen ? "comment" : "post"
          }`}</small>
          <i class="fa-solid fa-trash post-dropdown-icon"></i>
        </li>
      </ul>
    </div>
  );
}

export default PostDropdown;

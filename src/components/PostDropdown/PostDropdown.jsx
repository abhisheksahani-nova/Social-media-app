import React from "react";
import "./PostDropdown.css";
import {
  deletePost,
  getPosts,
  addPostToArchive,
} from "../../features/posts/postsSlice.js";
import { deleteCommentOfPost } from "../../features/comments/commentsSlice";
import { useDispatch, useSelector } from "react-redux";

function PostDropdown({
  setIsDropdownOpen,
  id,
  setIsPostEdit,
  setEditPostId,
  isCommentDropdownOpen,
  setIsCommentDropdownOpen,
  postId,
  commentId,
  editCommentData,
  setEditCommentData,
  commentUsername,
  post,
  isProfile,
}) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const signInUser = localStorage.getItem("username");
  const theme = useSelector((state) => state.users.theme);

  function handleDeletePost(id, token) {
    dispatch(deletePost({ id, token }));
    setIsDropdownOpen((prev) => !prev);
  }

  function handleEditPost(id) {
    setIsPostEdit((prev) => !prev);
    setEditPostId(id);
    setIsDropdownOpen((prev) => !prev);
  }

  function handleEdit(id) {
    if (isCommentDropdownOpen) {
      setEditCommentData({
        ...editCommentData,
        postId: postId,
        commentId: commentId,
        isEditComment: true,
      });
      setIsCommentDropdownOpen((prev) => !prev);
    } else {
      handleEditPost(id);
    }
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
      dispatch(getPosts());
      setIsCommentDropdownOpen((prev) => !prev);
    } else {
      handleDeletePost(id, token);
    }
  }

  return (
    <div className="playlist-dropdown-container">
      <ul
        className={`stacked-list list-style-none playlist-stacklist add-new-label-dropdown p-small ${
          theme == "dark" && "dark-theme-bg-clr"
        }`}
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

        {!isProfile &&
        (!isCommentDropdownOpen ||
          (isCommentDropdownOpen && signInUser == commentUsername)) ? (
          <li
            className="d-flex playlist-li-item cursor-p j-space-between"
            onClick={() => handleEdit(id)}
          >
            <small className="break-word">
              {`Edit ${isCommentDropdownOpen ? "comment" : "post"}`}
            </small>
            <i className="fa-solid fa-pencil post-dropdown-icon"></i>
          </li>
        ) : (
          ""
        )}

        <li
          className="d-flex playlist-li-item cursor-p j-space-between"
          onClick={() => handleDelete(id, token, postId, commentId)}
        >
          <small className="break-word">{`Delete ${
            isCommentDropdownOpen ? "comment" : "post"
          }`}</small>
          <i className="fa-solid fa-trash post-dropdown-icon"></i>
        </li>

        {!isCommentDropdownOpen && signInUser == post.username && (
          <li
            className="d-flex playlist-li-item cursor-p j-space-between"
            onClick={() => {
              dispatch(addPostToArchive({ post }));
              handleDelete(id, token, postId, commentId);
            }}
          >
            <small className="break-word">Archive post</small>
            <i className="fa-solid fa-box-archive post-dropdown-icon"></i>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PostDropdown;

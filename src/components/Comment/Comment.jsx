import React, { useState } from "react";
import "./Comment.css";
import { PostDropdown } from "../index";

function Comment({ comment, postId, postUsername }) {
  const { _id, text, username, name, votes } = comment;

  const [isCommentDropdownOpen, setIsCommentDropdownOpen] = useState(false);
  const signInUser = localStorage.getItem("username");

  return (
    <div className="d-flex user-post-container gap-small">
      <img
        className="avatar xs"
        src="https://semantic-ui.com/images/avatar2/large/kristy.png"
        alt="avatar"
      />

      {isCommentDropdownOpen && (
        <PostDropdown
          isCommentDropdownOpen={isCommentDropdownOpen}
          setIsCommentDropdownOpen={setIsCommentDropdownOpen}
          postId={postId}
          commentId={_id}
        />
      )}

      <div className="width-100">
        <div className="comment-content-container">
          <div className="d-flex justify-cont-between mb-1">
            <div>
              <h5>{name}</h5>
              <small> @{username} </small>
              <small>. &nbsp;1m</small>
            </div>
            {(postUsername == signInUser || username == signInUser) && (
              <i
                className="fa-solid fa-ellipsis"
                onClick={() => setIsCommentDropdownOpen((prev) => !prev)}
              ></i>
            )}
          </div>
          <small> {text} </small>
        </div>

        <div className="comment-icon-container">
          <i class="fa-regular fa-thumbs-up comment-like-icon"></i>
          <i class="fa-regular fa-thumbs-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Comment;

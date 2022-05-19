import React from "react";
import "./Comment.css";

function Comment({ comment }) {
  const { _id, text, username, name, votes } = comment;

  return (
    <div className="d-flex user-post-container gap-small">
      <img
        className="avatar xs"
        src="https://semantic-ui.com/images/avatar2/large/kristy.png"
        alt="avatar"
      />

      <div className="width-100">
        <div className="comment-content-container">
          <div className="d-flex justify-cont-between mb-1">
            <div>
              <h5>{name}</h5>
              <small> @{username} </small>
              <small>. &nbsp;1m</small>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
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

import React from "react";
import "./Comment.css";

function Comment() {
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
              <h5>Adarsh Balika</h5>
              <small> @adarshBalika </small>
              <small>. &nbsp;1m</small>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <small>It is my first comment , hurray</small>
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

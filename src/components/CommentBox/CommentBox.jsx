import React from "react";

function CommentBox() {
  return (
    <div className="d-flex user-post-container">
      <img
        className="avatar xs"
        src="https://semantic-ui.com/images/avatar2/large/kristy.png"
        alt="avatar"
      />

      <div className="width-100">
        <div className="d-flex justify-cont-between mb-1">
          <div>
            <h5>Adarsh Balika</h5>
            <small> @adarshBalika </small>
            <small>. &nbsp;1m</small>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <small>{content}</small>
      </div>
    </div>
  );
}

export default CommentBox;

import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="d-flex user-post-container">
      <img
        className="avatar xs"
        src="https://semantic-ui.com/images/avatar2/large/kristy.png"
        alt="avatar"
      />
      <div>
        <div className="d-flex justify-cont-between mb-1">
          <div>
            <h5>Tanay Pratap</h5>
            <small>@tanaypratap</small>
            <small>. &nbsp;1m</small>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <small>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </small>
        <div className="d-flex justify-cont-between mt-2">
          <i className="fa-regular fa-heart user-post-footer-icon"></i>
          <i className="fa-regular fa-message user-post-footer-icon"></i>
          <i className="fa-solid fa-share-nodes user-post-footer-icon"></i>
          <i className="fa-regular fa-bookmark user-post-footer-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Post;

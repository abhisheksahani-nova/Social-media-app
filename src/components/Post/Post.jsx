import React, { useState } from "react";
import "./Post.css";
import { PostDropdown } from "../index";

function Post({ post, setIsPostEdit, setEditPostId }) {
  const { _id, content, username, name } = post;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="d-flex user-post-container">
      <img
        className="avatar xs"
        src="https://semantic-ui.com/images/avatar2/large/kristy.png"
        alt="avatar"
      />
      {isDropdownOpen && (
        <PostDropdown
          setIsDropdownOpen={setIsDropdownOpen}
          id={_id}
          setIsPostEdit={setIsPostEdit}
          setEditPostId={setEditPostId}
        />
      )}
      <div className="width-100">
        <div className="d-flex justify-cont-between mb-1">
          <div>
            <h5>{name}</h5>
            <small> {username} </small>
            <small>. &nbsp;1m</small>
          </div>
          <i
            className="fa-solid fa-ellipsis"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          ></i>
        </div>
        <small>{content}</small>
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

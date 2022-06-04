import React from "react";
import "./DraftPost.css";

function DraftPost({draftPost}) {
    const {content}

  return (
    <div className="d-flex flex-direction-col user-post-container mt-1">
      <p className="draft-post-content">
        Lorem ipsum is dummy text used by developers to used until there is
        required content available to use on the website
      </p>
      <div className="draft-post-footer">
        <i class="fa-solid fa-trash-can"></i>
        <small className="ml-small">Delete</small>
      </div>
    </div>
  );
}

export default DraftPost;

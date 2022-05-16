import React from "react";
import "./CreatePostBox.css";

function CreatePostBox() {
  return (
    <div className="d-flex create-note-container mt-2 mb-2 small-gap">
      <img
        className="avatar xs"
        src="https://media-exp1.licdn.com/dms/image/C5603AQEqEDNWTDG0UQ/profile-displayphoto-shrink_100_100/0/1630987867284?e=1657756800&v=beta&t=4IUc0ffA-iWILrgS-rXbYEvU7LAYxCSyi2_Jxa7fdfU"
      />
      <div className="create-note-container">
        <div className="d-flex title-inp-container mb-2">
          <input
            className="note-title-inp"
            type="text"
            placeholder="What do you want to talk about?"
          />
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="d-flex note-footer mt-2">
          <div className="d-flex note-footer create-note-footer-icons-container">
            <i className="fa-solid fa-image"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-solid fa-face-grin-wide"></i>
          </div>
          <div className="d-flex note-footer justify-cont-right">
            <button className="btn btn-custom-sty btn-custom-small">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePostBox;

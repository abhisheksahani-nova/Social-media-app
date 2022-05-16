import React from "react";
import "./CreatePostBox.css";

function CreatePostBox() {
  return (
    <div class="d-flex create-note-container mt-2 mb-2 small-gap">
      <img
        class="avatar xs"
        src="https://media-exp1.licdn.com/dms/image/C5603AQEqEDNWTDG0UQ/profile-displayphoto-shrink_100_100/0/1630987867284?e=1657756800&v=beta&t=4IUc0ffA-iWILrgS-rXbYEvU7LAYxCSyi2_Jxa7fdfU"
      />
      <div class="create-note-container">
        <div class="d-flex title-inp-container mb-2">
          <input
            class="note-title-inp"
            type="text"
            placeholder="What do you want to talk about?"
          />
          <i class="fa-solid fa-xmark"></i>
        </div>

        <div class="d-flex note-footer mt-2">
          <div class="d-flex note-footer create-note-footer-icons-container">
            <i class="fa-solid fa-image"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-solid fa-face-grin-wide"></i>
          </div>
          <div class="d-flex note-footer justify-cont-right">
            <button class="btn">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePostBox;

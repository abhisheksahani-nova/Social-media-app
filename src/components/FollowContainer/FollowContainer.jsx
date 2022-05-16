import React from "react";
import "./FollowContainer.css";

function FollowContainer() {
  return (
    <div class="follow-unfollow-container mt-2">
      <h4 class="mb-1 ml-1">Who to follow?</h4>

      <ul class="follow-list-container list-style-none">
        <li class="d-flex justify-cont-between li-item border-none">
          <div class="d-flex">
            <img
              class="avatar xs"
              src="https://semantic-ui.com/images/avatar2/large/matthew.png"
              alt="avatar"
            />
            <div class="d-flex list-content">
              <h4>Jammy Sharma</h4>
              <small>@jammySharma</small>
            </div>
          </div>
          <button class="btn btn-text mb-1 follow-btn-link">Follow +</button>
        </li>

        <li class="d-flex justify-cont-between li-item border-none">
          <div class="d-flex">
            <img
              class="avatar xs"
              src="https://semantic-ui.com/images/avatar2/large/kristy.png"
              alt="avatar"
            />
            <div class="d-flex list-content">
              <h4>Rishi Mehta</h4>
              <small>@rishiMehta</small>
            </div>
          </div>
          <button class="btn btn-text mb-1 follow-btn-link">Follow +</button>
        </li>
      </ul>
    </div>
  );
}

export default FollowContainer;

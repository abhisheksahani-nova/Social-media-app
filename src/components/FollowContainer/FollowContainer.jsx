import React from "react";
import "./FollowContainer.css";

function FollowContainer() {
  return (
    <div className="follow-unfollow-container mt-2">
      <h4 className="mb-1 ml-1">Who to follow?</h4>

      <ul className="follow-list-container list-style-none">
        <li className="d-flex justify-cont-between li-item border-none">
          <div className="d-flex">
            <img
              className="avatar xs"
              src="https://semantic-ui.com/images/avatar2/large/matthew.png"
              alt="avatar"
            />
            <div className="d-flex list-content">
              <h4>Jammy Sharma</h4>
              <small>@jammySharma</small>
            </div>
          </div>
          <button className="btn btn-text mb-1 follow-btn-link">Follow +</button>
        </li>

        <li className="d-flex justify-cont-between li-item border-none">
          <div className="d-flex">
            <img
              className="avatar xs"
              src="https://semantic-ui.com/images/avatar2/large/kristy.png"
              alt="avatar"
            />
            <div className="d-flex list-content">
              <h4>Rishi Mehta</h4>
              <small>@rishiMehta</small>
            </div>
          </div>
          <button className="btn btn-text mb-1 follow-btn-link">Follow +</button>
        </li>
      </ul>
    </div>
  );
}

export default FollowContainer;

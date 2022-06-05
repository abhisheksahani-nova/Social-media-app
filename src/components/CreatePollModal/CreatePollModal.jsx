import React, { useState } from "react";
import "./CreatePollModal.css";

function CreatePollModal({ setPollModal }) {
  return (
    <div className="playlist-dropdown-container">
      <div
        className={`stacked-list list-style-none playlist-stacklist profile-edit-modal p-1`}
      >
        <div
          className={`d-flex playlist-li-item videolib-list-container border-bottom j-space-between mb-small`}
        >
          <h3 className="break-word">Create a poll</h3>
          <i
            className="fa-solid fa-rectangle-xmark cursor-p"
            onClick={() => setPollModal((prev) => !prev)}
          ></i>
        </div>

        <div className="poll-modal-container">
          <div className="d-flex flex-direction-col playlist-li-item cursor-p gap-small mb-small">
            <label className="profile-edit-modal-inp-label">
              Your question
            </label>
            <input
              type="text"
              placeholder="E.g., How do you commute to work?"
              className="profile-edit-modal-inp"
            ></input>
          </div>

          <div className="d-flex flex-direction-col playlist-li-item cursor-p gap-small mb-small">
            <label className="profile-edit-modal-inp-label">Option 1</label>
            <input
              type="text"
              placeholder="E.g., Public transportation"
              className="profile-edit-modal-inp"
            ></input>
          </div>

          <div className="d-flex flex-direction-col playlist-li-item cursor-p gap-small mb-small">
            <label className="profile-edit-modal-inp-label">Option 2</label>
            <input
              type="text"
              placeholder="E.g., Drive myself"
              className="profile-edit-modal-inp"
            ></input>
          </div>

          <button className="btn btn-custom-sty btn-custom-small mb-small">Add option</button>
        </div>

        <div className="d-flex justify-cont-right mt-1">
          <button className="btn btn-custom-sty btn-custom-small">Save</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePollModal;

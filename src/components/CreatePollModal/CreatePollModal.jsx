import React, { useState } from "react";
import "./CreatePollModal.css";
import TextareaAutosize from "react-textarea-autosize";

function CreatePollModal({ setPollModal }) {
  const [pollModalOptionNum, setPollModalOptionNum] = useState(2);
  const [pollData, setPollData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    showPoll: false,
  });

  function handleAddOption() {
    setPollModalOptionNum((prev) => prev + 1);
  }

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

        <div className="poll-modalbody-container">
          <div className="d-flex flex-direction-col playlist-li-item cursor-p gap-small mb-small">
            <label className="profile-edit-modal-inp-label">
              Your question
            </label>

            <TextareaAutosize
              type="text"
              placeholder="E.g., How do you commute to work?"
              className="profile-edit-modal-inp"
              onChange={(e) =>
                setPollData({ ...pollData, question: e.target.value })
              }
            />
          </div>

          <div className="d-flex flex-direction-col playlist-li-item cursor-p gap-small mb-small">
            <label className="profile-edit-modal-inp-label">Option 1</label>
            <input
              type="text"
              placeholder="E.g., Public transportation"
              className="profile-edit-modal-inp"
              onChange={(e) =>
                setPollData({ ...pollData, option1: e.target.value })
              }
            ></input>
          </div>

          <div className="d-flex flex-direction-col playlist-li-item cursor-p gap-small mb-small">
            <label className="profile-edit-modal-inp-label">Option 2</label>
            <input
              type="text"
              placeholder="E.g., Drive myself"
              className="profile-edit-modal-inp"
              onChange={(e) =>
                setPollData({ ...pollData, option2: e.target.value })
              }
            ></input>
          </div>

          {pollModalOptionNum >= 3 && (
            <div className="d-flex flex-direction-col playlist-li-item cursor-p gap-small mb-small">
              <label className="profile-edit-modal-inp-label">Option 3</label>
              <input
                type="text"
                placeholder="E.g., Ola or Uber"
                className="profile-edit-modal-inp"
                onChange={(e) =>
                  setPollData({ ...pollData, option3: e.target.value })
                }
              ></input>
            </div>
          )}

          {pollModalOptionNum == 4 && (
            <div className="d-flex flex-direction-col playlist-li-item cursor-p gap-small mb-small">
              <label className="profile-edit-modal-inp-label">Option 4</label>
              <input
                type="text"
                placeholder="E.g., Other"
                className="profile-edit-modal-inp"
                onChange={(e) =>
                  setPollData({ ...pollData, option4: e.target.value })
                }
              ></input>
            </div>
          )}

          {pollModalOptionNum !== 4 && (
            <button
              className="btn pri-outline-btn btn-custom-small mb-small"
              onClick={() => handleAddOption()}
            >
              + Add option
            </button>
          )}
        </div>

        <div className="d-flex justify-cont-right mt-1">
          <button className="btn btn-custom-sty btn-custom-small">Save</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePollModal;

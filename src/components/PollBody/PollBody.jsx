import React from "react";
import "./PollBody.css";
import { useSelector } from "react-redux";

function PollBody({ pollData, setPollData, showCloseIcon }) {
  const theme = useSelector((state) => state.users.theme);

  function handleClosePollBody() {
    setPollData({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      showPoll: false,
    });
  }

  return (
    <div
      className={`poll-body-container ${
        theme == "dark" && "border-gray4-dark"
      }`}
    >
      <div className="d-flex justify-cont-between mb-1">
        {pollData.question && (
          <p className={`pollbody-question ${theme == "dark" && "white-clr"}`}>
            {pollData.question}
          </p>
        )}
        {showCloseIcon && (
          <i
            className={`fa-solid fa-circle-xmark pollbody-close-icon ${
              theme == "dark" && "white-clr"
            }`}
            onClick={() => handleClosePollBody()}
          ></i>
        )}
      </div>

      <div className="d-flex flex-direction-col gap-small">
        {pollData.option1 && (
          <button
            className={`btn pri-outline-btn btn-custom-small btn-content-fontsize ${
              theme == "dark" && "dark-bg-light border-gray4-dark white-clr"
            }`}
          >
            {pollData.option1}
          </button>
        )}

        {pollData.option2 && (
          <button
            className={`btn pri-outline-btn btn-custom-small btn-content-fontsize ${
              theme == "dark" && "dark-bg-light border-gray4-dark white-clr"
            }`}
          >
            {pollData.option2}
          </button>
        )}

        {pollData.option3 && (
          <button
            className={`btn pri-outline-btn btn-custom-small btn-content-fontsize ${
              theme == "dark" && "dark-bg-light border-gray4-dark white-clr"
            }`}
          >
            {pollData.option3}
          </button>
        )}

        {pollData.option4 && (
          <button
            className={`btn pri-outline-btn btn-custom-small btn-content-fontsize ${
              theme == "dark" && "dark-bg-light border-gray4-dark white-clr"
            }`}
          >
            {pollData.option4}
          </button>
        )}
      </div>
    </div>
  );
}

export default PollBody;

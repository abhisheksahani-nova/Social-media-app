import React from "react";
import "./PollBody.css";

function PollBody({ pollData, setPollData, showCloseIcon }) {
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
    <div className="poll-body-container">
      <div className="d-flex justify-cont-between mb-1">
        {pollData.question && (
          <p className="pollbody-question">{pollData.question}</p>
        )}
        {showCloseIcon && (
          <i
            class="fa-solid fa-circle-xmark pollbody-close-icon"
            onClick={() => handleClosePollBody()}
          ></i>
        )}
      </div>

      <div className="d-flex flex-direction-col gap-small">
        {pollData.option1 && (
          <button className="btn pri-outline-btn btn-custom-small btn-content-fontsize">
            {pollData.option1}
          </button>
        )}

        {pollData.option2 && (
          <button className="btn pri-outline-btn btn-custom-small btn-content-fontsize">
            {pollData.option2}
          </button>
        )}

        {pollData.option3 && (
          <button className="btn pri-outline-btn btn-custom-small btn-content-fontsize">
            {pollData.option3}
          </button>
        )}

        {pollData.option4 && (
          <button className="btn pri-outline-btn btn-custom-small btn-content-fontsize">
            {pollData.option4}
          </button>
        )}
      </div>
    </div>
  );
}

export default PollBody;

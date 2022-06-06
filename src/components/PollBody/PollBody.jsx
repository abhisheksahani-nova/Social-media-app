import React from "react";
import "./PollBody.css";

function PollBody() {
  return (
    <div className="poll-body-container">
      <div className="d-flex justify-cont-between mb-1">
        <p className="pollbody-question">Where do you live?</p>
        <i class="fa-solid fa-circle-xmark pollbody-close-icon"></i>
      </div>

      <div className="d-flex flex-direction-col gap-small">
        <button className="btn pri-outline-btn btn-custom-small">Mumbai</button>

        <button className="btn pri-outline-btn btn-custom-small">
          Banglore
        </button>

        <button className="btn pri-outline-btn btn-custom-small">Manali</button>

        <button className="btn pri-outline-btn btn-custom-small">
          Himalayas
        </button>
      </div>
    </div>
  );
}

export default PollBody;

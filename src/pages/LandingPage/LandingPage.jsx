import React from "react";
import "./LandingPage.css";
import { Navbar } from "../../components/index";

function LandingPage() {
  return (
    <div>
      <Navbar isLanding={true} />
      <section className="d-flex align-item-center justify-cont-center  landingpage-main-container">
        <div className="d-flex flex-direction-col gap-2 align-item-center justify-cont-center  landingpage-content-container">
          <i className="fa-solid fa-camera camera-icon"></i>
          <p className="landingpage-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <button className="btn pri-outline-btn">Join Now!</button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;

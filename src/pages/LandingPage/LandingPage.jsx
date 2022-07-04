import React from "react";
import "./LandingPage.css";
import { Navbar } from "../../components/index";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar isLanding={true} />

      <section className="d-flex align-item-center justify-cont-center  landingpage-main-container">
        <div className="d-flex flex-direction-col gap-2 align-item-center justify-cont-center  landingpage-content-container">
          <i className="fa-solid fa-camera camera-icon"></i>
          <h1 className="landingpage-content">
            Find your tribe on Social. Create, Consume & Share post with others
            in this simple yet useful social media app.
          </h1>
          <button
            className="btn pri-outline-btn"
            onClick={() => navigate("/login")}
          >
            Join Now!
          </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;

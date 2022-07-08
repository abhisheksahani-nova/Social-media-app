import React from "react";
import "./LandingPage.css";
import { Navbar } from "../../components/index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function LandingPage() {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.users.theme);

  return (
    <div>
      <Navbar isLanding={true} />

      <section className="d-flex align-item-center justify-cont-center  landingpage-main-container">
        <div className="d-flex flex-direction-col gap-2 align-item-center justify-cont-center  landingpage-content-container">
          <i className="fa-solid fa-camera camera-icon"></i>
          <h1
            className={`landingpage-content ${
              theme == "dark" && "rosybrown-clr"
            }`}
          >
            Find your tribe on Social.{" "}
            <span className="blue-text-clr">Create</span>,{" "}
            <span className="yellow-text-clr">Consume</span> &{" "}
            <span className="pink-text-clr">Share</span> post with others in
            this simple yet useful social media app.
          </h1>
          <button
            className={`btn pri-outline-btn ${
              theme == "dark" && "dark-theme-bg-clr border-white"
            }`}
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

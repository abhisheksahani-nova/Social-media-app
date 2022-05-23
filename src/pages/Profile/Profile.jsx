import React, { useState } from "react";
import { Navbar, Sidebar, FollowContainer } from "../../components/index";
import "./Profile.css";
import { ProfileEditModal } from "../../components/index";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Navbar />
      <section className="d-flex gap-4">
        <Sidebar />

        {showModal && <ProfileEditModal setShowModal={setShowModal} />}

        <div className="user-profile-middle-container p-2">
          <div className="d-flex flex-direction-col gap-1 ">
            <section className="d-flex justify-cont-center ">
              <div className="profile-page-container card-basic profile-card">
                <div className="d-flex mb-2">
                  <img
                    className="avatar md"
                    src="https://semantic-ui.com/images/avatar2/large/matthew.png"
                    alt="user avatar"
                  />
                </div>
                <div className="d-flex flex-direction-col">
                  <h2>Akash sharma</h2>
                  <p className="profile-para-text mb-1">@akashSharma</p>
                  <p className="profile-para-text mb-small">
                    A Homosapien evolved to do software development,
                    storytelling, and art.
                  </p>
                  <p className="profile-para-text mb-2">
                    <a href="https://www.linkedin.com/in/abhishek-sahani-698b12135/">
                      portfolio website
                    </a>
                  </p>
                </div>
                <button
                  className="btn btn-custom-sty"
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  Edit
                </button>
              </div>
            </section>
          </div>
        </div>
        <FollowContainer />
      </section>
    </div>
  );
}

export default Profile;

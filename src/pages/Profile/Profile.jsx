import React from "react";
import { Navbar, Sidebar, FollowContainer } from "../../components/index";
import "./Profile.css";

function Profile() {
  return (
    <div>
      <Navbar />
      <section className="d-flex gap-4">
        <Sidebar />
        <div className="user-profile-middle-container p-2">
          <div className="d-flex flex-direction gap-1 ">
            <section className="d-flex justify-cont-center ">
              <div className="profile-page-container card-basic profile-card">
                <div className="d-flex justify-cont-center mb-2 mt-2">
                  <img
                    className="avatar md"
                    src="https://semantic-ui.com/images/avatar2/large/matthew.png"
                    alt="user avatar"
                  />
                </div>
                
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

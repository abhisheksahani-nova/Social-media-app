import React, { useState } from "react";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import { useSelector } from "react-redux";
import DraftPost from "./DraftPost/DraftPost";
import { useWindowWidth } from "../HomePage/HomePage";
import { useNavigate } from "react-router-dom";

function Draft() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFollowContainer, setShowFollowContainer] = useState(false);
  const { windowWidth } = useWindowWidth();
  const draftPosts = useSelector((state) => state.posts.draftPosts);
  const theme = useSelector((state) => state.users.theme);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar setShowSidebar={setShowSidebar} windowWidth={windowWidth} />
      <section className="d-flex page-main-container gap-4 responsive-gap">
        {windowWidth > 810 || showSidebar ? <Sidebar /> : null}
        <div className="postbox-main-container">
          {draftPosts?.length > 0 && (
            <div
              className={`d-flex j-content-right p-relative mt-1 ${
                showFollowContainer && "mb-4"
              }`}
            >
              {windowWidth <= 560 && !showFollowContainer ? (
                <div
                  className={`d-flex gap-2 follow-title-container ${
                    theme == "dark" && "dark-theme-bg-clr border-gray3-dark"
                  }`}
                  onClick={() => setShowFollowContainer((prev) => !prev)}
                >
                  <h4 className="follow-container-title ml-1">
                    Who to follow?
                  </h4>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
              ) : (
                windowWidth <= 560 &&
                showFollowContainer && (
                  <FollowContainer
                    setShowFollowContainer={setShowFollowContainer}
                  />
                )
              )}
            </div>
          )}

          {draftPosts?.length > 0 ? (
            <div className="d-flex flex-direction-col gap-1 mt-1 mb-1">
              {draftPosts.map((draftPost, index) => {
                return <DraftPost key={index} draftPost={draftPost} />;
              })}
            </div>
          ) : (
            <div className="d-flex flex-direction-col gap-1 rocket-icon-container mt-1 mb-1">
              <i
                className={`fa-solid fa-rocket rocket-icon ${
                  theme == "dark" && "rocket-icon-dark"
                }`}
              ></i>
              <button
                className={`btn pri-outline-btn ${
                  theme == "dark" && "dark-bg-light white-clr border-gray4-dark"
                }`}
                onClick={() => navigate("/home")}
              >
                Add post
              </button>
            </div>
          )}
        </div>
        {windowWidth > 560 && draftPosts?.length > 0 && <FollowContainer />}
      </section>
    </div>
  );
}

export default Draft;

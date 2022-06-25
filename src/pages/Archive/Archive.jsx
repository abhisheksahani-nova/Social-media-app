import React, { useState } from "react";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import { useSelector } from "react-redux";
import { useWindowWidth } from "../HomePage/HomePage";

function Archive() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFollowContainer, setShowFollowContainer] = useState(false);
  const { windowWidth } = useWindowWidth();
  const archivePosts = useSelector((state) => state.posts.archivePosts);
  const theme = useSelector((state) => state.users.theme);

  return (
    <div>
      <Navbar setShowSidebar={setShowSidebar} windowWidth={windowWidth} />
      <section className="d-flex page-main-container gap-4 responsive-gap">
        {windowWidth > 810 || showSidebar ? <Sidebar /> : null}
        <div className="postbox-main-container">
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
                <h4 className="follow-container-title ml-1">Who to follow?</h4>
                <i class="fa-solid fa-angle-down"></i>
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

          <div className="d-flex flex-direction-col gap-1 mt-1 mb-1">
            {archivePosts?.map((post) => {
              return <Post key={post._id} post={post} />;
            })}
          </div>
        </div>
        {windowWidth > 560 && <FollowContainer />}
      </section>
    </div>
  );
}

export default Archive;

import React, { useState } from "react";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import { useSelector } from "react-redux";
import DraftPost from "./DraftPost/DraftPost";
import { useWindowWidth } from "../HomePage/HomePage";

function Draft() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { windowWidth } = useWindowWidth();
  const draftPosts = useSelector((state) => state.posts.draftPosts);

  return (
    <div>
      <Navbar setShowSidebar={setShowSidebar} windowWidth={windowWidth} />
      <section className="d-flex page-main-container gap-4 responsive-gap">
        {windowWidth > 810 || showSidebar ? <Sidebar /> : null}
        <div>
          <div className="d-flex flex-direction-col gap-1 mt-1 mb-1">
            {draftPosts.map((draftPost, index) => {
              return <DraftPost key={index} draftPost={draftPost} />;
            })}
          </div>
        </div>
        <FollowContainer />
      </section>
    </div>
  );
}

export default Draft;

import React, { useState } from "react";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import { useSelector } from "react-redux";
import { useWindowWidth } from "../HomePage/HomePage";

function Archive() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { windowWidth } = useWindowWidth();
  const archivePosts = useSelector((state) => state.posts.archivePosts);

  return (
    <div>
      <Navbar setShowSidebar={setShowSidebar} windowWidth={windowWidth} />
      <section className="d-flex page-main-container gap-4 responsive-gap">
        {windowWidth > 810 || showSidebar ? <Sidebar /> : null}
        <div className="postbox-main-container">
          <div className="d-flex flex-direction-col gap-1 mt-1 mb-1">
            {archivePosts?.map((post) => {
              return <Post key={post._id} post={post} />;
            })}
          </div>
        </div>
        <FollowContainer />
      </section>
    </div>
  );
}

export default Archive;

import React, { useEffect, useState } from "react";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../features/posts/postsSlice";
import { useWindowWidth } from "../HomePage/HomePage";

function Explore() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { windowWidth } = useWindowWidth();
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <Navbar setShowSidebar={setShowSidebar} windowWidth={windowWidth} />
      <section className="d-flex page-main-container gap-4 responsive-gap">
        {windowWidth > 810 || showSidebar ? <Sidebar /> : null}
        <div>
          <div className="d-flex flex-direction-col gap-1 mt-1 mb-1">
            {posts.map((post) => {
              return <Post key={post._id} post={post} />;
            })}
          </div>
        </div>
        <FollowContainer />
      </section>
    </div>
  );
}

export default Explore;

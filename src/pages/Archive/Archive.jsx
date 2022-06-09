import React from "react";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import { useSelector } from "react-redux";

function Archive() {
  const archivePosts = useSelector((state) => state.posts.archivePosts);

  return (
    <div>
      <Navbar />
      <section className="d-flex gap-4">
        <Sidebar />
        <div>
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

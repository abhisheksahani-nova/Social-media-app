import React from "react";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import { useSelector } from "react-redux";
import DraftPost from "./DraftPost/DraftPost";

function Draft() {
  const draftPosts = useSelector((state) => state.posts.draftPosts);
  console.log(draftPosts);

  return (
    <div>
      <Navbar />
      <section className="d-flex gap-4">
        <Sidebar />
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

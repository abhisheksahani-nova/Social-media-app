import React, { useEffect } from "react";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../features/posts/postsSlice";

function Explore() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <Navbar />
      <section className="d-flex gap-4">
        <Sidebar />
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

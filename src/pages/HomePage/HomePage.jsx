import React, { useEffect } from "react";
import "./HomePage.css";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import CreatePostBox from "./CreatePostBox/CreatePostBox";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, createNewPost } from "../../features/posts/postsSlice";

function HomePage() {
  const postsObj = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      {console.log(postsObj.posts, "homepage")}
      <Navbar />
      <section className="d-flex gap-4">
        <Sidebar />
        <div>
          <CreatePostBox />
          <div className="d-flex flex-direction gap-1 ">
            {postsObj.posts.map((post) => {
              return <Post key={post._id} post={post} />;
            })}
          </div>
        </div>
        <FollowContainer />
      </section>
    </div>
  );
}

export default HomePage;

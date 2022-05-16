import React, { useEffect } from "react";
import "./HomePage.css";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import CreatePostBox from "./CreatePostBox/CreatePostBox";
import { useDispatch, useSelector } from "react-redux";
import { asyncCreateNewPost } from "../../features/posts/postsSlice";

function HomePage() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

 
    var postData= {
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
    }
  

  useEffect(() => {
    if (token) {
      dispatch(asyncCreateNewPost({ postData, token }));
    }
  }, [token]);

  return (
    <div>
      <Navbar />
      <section className="d-flex gap-4">
        <Sidebar />
        <div>
          <CreatePostBox />
          <Post />
        </div>
        <FollowContainer />
      </section>
    </div>
  );
}

export default HomePage;

import React from "react";
import "./HomePage.css";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import CreatePostBox from "./CreatePostBox/CreatePostBox";

function HomePage() {
  return (
    <div>
      <Navbar />
      <section class="d-flex gap-4">
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

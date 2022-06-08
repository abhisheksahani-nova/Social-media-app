import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import CreatePostBox from "./CreatePostBox/CreatePostBox";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/posts/postsSlice";

function HomePage() {
  const [isPostEdit, setIsPostEdit] = useState(false);
  const [editPostId, setEditPostId] = useState("");
  const postsObj = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  function getHomePagePost() {
    const homePagePost = postsObj.posts.filter(
      (post) =>
        post.username == "adarshbalika" ||
        post.username == "abhishekSahani" ||
        post.username == "msDhoni"
    );

    return homePagePost
  }

  return (
    <div>
      <Navbar />
      <section className="d-flex gap-4">
        <Sidebar />
        <div>
          <CreatePostBox
            isPostEdit={isPostEdit}
            setIsPostEdit={setIsPostEdit}
            editPostId={editPostId}
          />
          <div className="d-flex flex-direction-col gap-1 ">
            {getHomePagePost().map((post) => {
              return (
                <Post
                  key={post._id}
                  post={post}
                  setIsPostEdit={setIsPostEdit}
                  setEditPostId={setEditPostId}
                />
              );
            })}
          </div>
        </div>
        <FollowContainer />
      </section>
    </div>
  );
}

export default HomePage;

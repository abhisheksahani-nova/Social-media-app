import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Navbar, Sidebar, Post, FollowContainer } from "../../components/index";
import CreatePostBox from "./CreatePostBox/CreatePostBox";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/posts/postsSlice";

function HomePage() {
  const [isPostEdit, setIsPostEdit] = useState(false);
  const [editPostId, setEditPostId] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const postsObj = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

    return homePagePost;
  }

  return (
    <div>
      <Navbar setShowSidebar={setShowSidebar} windowWidth={windowWidth} />
      <section className="d-flex page-main-container gap-4 responsive-gap">
        {windowWidth > 810 || showSidebar ? <Sidebar /> : null}
        <div className="postbox-main-container">
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

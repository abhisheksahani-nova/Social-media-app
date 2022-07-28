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
  const [showFollowContainer, setShowFollowContainer] = useState(false);
  const postsObj = useSelector((state) => state.posts);
  const theme = useSelector((state) => state.users.theme);
  const dispatch = useDispatch();
  const { windowWidth } = useWindowWidth();
  const signInUser = localStorage.getItem("username");

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  function getHomePagePost() {
    const homePagePost = postsObj.posts.filter(
      (post) =>
        post.username == "adarshbalika" ||
        post.username == "abhishekSahani" ||
        post.username == "msDhoni" ||
        post.username == signInUser
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
            <div
              className={`d-flex j-content-right p-relative ${
                showFollowContainer && "mb-2"
              }`}
            >
              {windowWidth <= 560 && !showFollowContainer ? (
                <div
                  className={`d-flex gap-2 follow-title-container ${
                    theme == "dark" && "dark-theme-bg-clr border-gray3-dark"
                  }`}
                  onClick={() => setShowFollowContainer((prev) => !prev)}
                >
                  <h4 className="follow-container-title ml-1">
                    Who to follow?
                  </h4>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
              ) : (
                windowWidth <= 560 &&
                showFollowContainer && (
                  <FollowContainer
                    setShowFollowContainer={setShowFollowContainer}
                  />
                )
              )}
            </div>

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
        {windowWidth > 560 && <FollowContainer />}
      </section>
    </div>
  );
}

export default HomePage;

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowWidth };
}

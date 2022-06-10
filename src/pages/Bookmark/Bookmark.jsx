import React, { useEffect, useState } from "react";
import { Navbar, Sidebar, FollowContainer, Post } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { updateBookmarks } from "../../features/users/usersSlice";
import { useWindowWidth } from "../HomePage/HomePage";

function Bookmark() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFollowContainer, setShowFollowContainer] = useState(false);
  const bookmarks = useSelector((state) => state.users.bookmarks);
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  const { windowWidth } = useWindowWidth();

  useEffect(() => {
    const updatedBookmarks = posts.filter((post) =>
      bookmarks.some((bookmark) => bookmark._id == post._id)
    );

    dispatch(updateBookmarks({ updatedBookmarks }));
  }, [posts, comments]);

  return (
    <div>
      <Navbar setShowSidebar={setShowSidebar} windowWidth={windowWidth} />
      <section className="d-flex page-main-container gap-4 responsive-gap">
        {windowWidth > 810 || showSidebar ? <Sidebar /> : null}
        <div className="postbox-main-container">
          <div
            className={`d-flex j-content-right p-relative mt-1 ${
              showFollowContainer && "mb-4"
            }`}
          >
            {windowWidth <= 560 && !showFollowContainer ? (
              <div
                className="d-flex gap-2 follow-title-container"
                onClick={() => setShowFollowContainer((prev) => !prev)}
              >
                <h4 className="follow-container-title ml-1">Who to follow?</h4>
                <i class="fa-solid fa-angle-down"></i>
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

          <div className="d-flex flex-direction-col gap-1 mt-1 mb-1">
            {bookmarks?.map((post) => {
              return <Post key={post._id} post={post} />;
            })}
          </div>
        </div>
        {windowWidth > 560 && <FollowContainer />}
      </section>
    </div>
  );
}

export default Bookmark;

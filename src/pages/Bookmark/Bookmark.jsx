import React, { useEffect } from "react";
import { Navbar, Sidebar, FollowContainer, Post } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../features/users/usersSlice";
import { updateBookmarks } from "../../features/users/usersSlice";

function Bookmark() {
  const bookmarks = useSelector((state) => state.users.bookmarks);
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector(state => state.comments.comments)
  const dispatch = useDispatch();

  useEffect(() => {

    const updatedBookmarks = posts.filter((post) =>
      bookmarks.some((bookmark) => bookmark._id == post._id)
    );

    dispatch(updateBookmarks({ updatedBookmarks }));
  }, [posts, comments]);

  return (
    <div>
      <Navbar />
      <section className="d-flex gap-4">
        <Sidebar />
        <div>
          <div className="d-flex flex-direction gap-1 ">
            {bookmarks?.map((post) => {
              return <Post key={post._id} post={post} />;
            })}
          </div>
        </div>
        <FollowContainer />
      </section>
    </div>
  );
}

export default Bookmark;

import React, { useEffect, useState } from "react";
import "./Post.css";
import { PostDropdown } from "../index";
import { likePost, dislikePost } from "../../features/posts/postsSlice";
import {
  bookmarkPost,
  removePostFromBookmark,
} from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

function Post({ post, setIsPostEdit, setEditPostId }) {
  const { _id, content, username, name } = post;

  const [isPostLikedBy, setIsPostLikedBy] = useState(false);
  const [isPostBookmark, setIsPostBookmark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const token = localStorage.getItem("token");
  const activeUsername = localStorage.getItem("username");

  const dispatch = useDispatch();
  const postObj = useSelector((state) => state.posts);
  const bookmark = useSelector((state) => state.users.bookmarks);

  useEffect(() => {
    const thisPost = postObj.posts.filter((post) => post._id == _id);
    const isLikedPost = thisPost[0].likes.likedBy.some(
      (user) => user.username == activeUsername
    );

    setIsPostLikedBy(isLikedPost);
  }, [postObj]);

  useEffect(() => {
    const isBookmark = bookmark.some((user) => user._id == _id);
    setIsPostBookmark(isBookmark);
  }, [bookmark]);

  return (
    <div className="d-flex user-post-container">
      <img
        className="avatar xs"
        src="https://semantic-ui.com/images/avatar2/large/kristy.png"
        alt="avatar"
      />
      {isDropdownOpen && (
        <PostDropdown
          setIsDropdownOpen={setIsDropdownOpen}
          id={_id}
          setIsPostEdit={setIsPostEdit}
          setEditPostId={setEditPostId}
        />
      )}
      <div className="width-100">
        <div className="d-flex justify-cont-between mb-1">
          <div>
            <h5>{name}</h5>
            <small> {username} </small>
            <small>. &nbsp;1m</small>
          </div>
          <i
            className="fa-solid fa-ellipsis"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          ></i>
        </div>
        <small>{content}</small>
        <div className="d-flex justify-cont-between mt-2">
          {isPostLikedBy ? (
            <i
              className="fa-solid fa-heart clr-red user-post-footer-icon"
              onClick={() => dispatch(dislikePost({ _id, token }))}
            ></i>
          ) : (
            <i
              className="fa-regular fa-heart user-post-footer-icon"
              onClick={() => dispatch(likePost({ _id, token }))}
            ></i>
          )}

          <i className="fa-regular fa-message user-post-footer-icon"></i>
          <i className="fa-solid fa-share-nodes user-post-footer-icon"></i>

          {isPostBookmark ? (
            <i
              className="fa-solid fa-bookmark user-post-footer-icon"
              onClick={() => dispatch(removePostFromBookmark({ _id, token }))}
            ></i>
          ) : (
            <i
              className="fa-regular fa-bookmark user-post-footer-icon"
              onClick={() => dispatch(bookmarkPost({ _id, token }))}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;

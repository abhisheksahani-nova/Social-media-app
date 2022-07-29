import React, { useState } from "react";
import "./Comment.css";
import { PostDropdown } from "../index";
import { useDispatch, useSelector } from "react-redux";
import {
  upvoteCommentOfPost,
  downvoteCommentOfPost,
} from "../../features/comments/commentsSlice";
import { getPosts } from "../../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";

function Comment({
  comment,
  postId,
  postUsername,
  editCommentData,
  setEditCommentData,
}) {
  const { _id, text, username, name, votes } = comment;

  const [isCommentDropdownOpen, setIsCommentDropdownOpen] = useState(false);

  const users = useSelector((state) => state.users.users);
  const theme = useSelector((state) => state.users.theme);

  const signInUser = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCommentUpVote(postId, commentId, token) {
    dispatch(upvoteCommentOfPost({ postId, commentId, token }));
    dispatch(getPosts());
  }

  function handleCommentDownVote(postId, commentId, token) {
    dispatch(downvoteCommentOfPost({ postId, commentId, token }));
    dispatch(getPosts());
  }

  function navigateToProfilePage() {
    const user = users.filter((user) => user.username == username);
    const { _id } = user[0];
    navigate(`/profile/${_id}`);
  }

  return (
    <div className="d-flex user-post-container gap-small">
      <img
        className="avatar xs"
        src="https://semantic-ui.com/images/avatar2/large/kristy.png"
        alt="avatar"
        onClick={() => navigateToProfilePage()}
      />

      {isCommentDropdownOpen && (
        <PostDropdown
          isCommentDropdownOpen={isCommentDropdownOpen}
          setIsCommentDropdownOpen={setIsCommentDropdownOpen}
          postId={postId}
          commentId={_id}
          editCommentData={editCommentData}
          setEditCommentData={setEditCommentData}
          commentUsername={username}
        />
      )}

      <div className="width-100">
        <div
          className={`comment-content-container ${
            theme == "dark" && "dark-bg-light"
          }`}
        >
          <div className="d-flex justify-cont-between mb-1">
            <div>
              <h5
                className="text-hover-underline"
                onClick={() => navigateToProfilePage()}
              >
                {name}
              </h5>
              <small onClick={() => navigateToProfilePage()}>
                {" "}
                {username}{" "}
              </small>
              <small>. &nbsp;1m</small>
            </div>
            {(postUsername == signInUser || username == signInUser) && (
              <i
                className="fa-solid fa-ellipsis"
                onClick={() => setIsCommentDropdownOpen((prev) => !prev)}
              ></i>
            )}
          </div>
          <small> {text} </small>
        </div>

        <div className="d-flex gap-1 comment-icon-container">
          <div>
            <i
              className="fa-regular fa-thumbs-up comment-like-icon"
              onClick={() => handleCommentUpVote(postId, _id, token)}
            ></i>
            <span className="vote-count"> {votes.upvotedBy.length} </span>
          </div>

          <div>
            <i
              className="fa-regular fa-thumbs-down comment-like-icon"
              onClick={() => handleCommentDownVote(postId, _id, token)}
            ></i>
            <span className="vote-count"> {votes.downvotedBy.length} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;

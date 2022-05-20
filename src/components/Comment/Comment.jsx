import React, { useState } from "react";
import "./Comment.css";
import { PostDropdown } from "../index";
import { useDispatch } from "react-redux";
import {
  upvoteCommentOfPost,
  downvoteCommentOfPost,
} from "../../features/comments/commentsSlice";

function Comment({
  comment,
  postId,
  postUsername,
  editCommentData,
  setEditCommentData,
}) {
  const { _id, text, username, name, votes } = comment;

  const [isCommentDropdownOpen, setIsCommentDropdownOpen] = useState(false);

  const signInUser = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  function handleCommentUpVote(postId, commentId, token) {
    dispatch(upvoteCommentOfPost({ postId, commentId, token }));
  }

  function handleCommentDownVote(postId, commentId, token) {
    dispatch(downvoteCommentOfPost({ postId, commentId, token }));
  }

  return (
    <div className="d-flex user-post-container gap-small">
      <img
        className="avatar xs"
        src="https://semantic-ui.com/images/avatar2/large/kristy.png"
        alt="avatar"
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
        <div className="comment-content-container">
          <div className="d-flex justify-cont-between mb-1">
            <div>
              <h5>{name}</h5>
              <small> @{username} </small>
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
              class="fa-regular fa-thumbs-up comment-like-icon"
              onClick={() => handleCommentUpVote(postId, _id, token)}
            ></i>
            <span className="vote-count"> {votes.upvotedBy.length} </span>
          </div>

          <div>
            <i
              class="fa-regular fa-thumbs-down comment-like-icon"
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

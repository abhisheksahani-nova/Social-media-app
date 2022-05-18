import React, { useState } from "react";
import "./Post.css";
import { PostDropdown } from "../index";
import { likePost, dislikePost } from "../../features/posts/postsSlice";
import { bookmarkPost } from "../../features/bookmarks/bookmarksSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function Post({ post, setIsPostEdit, setEditPostId }) {
  const { _id, content, username, name } = post;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  function handleLikeDislikePost(postId, token) {
    const callLike = async (postId, token) => {
      try {
        const response = await axios.post(`/api/posts/like/${postId}`, {} ,{
          headers: { authorization: token },
        });
        console.log(response);
      } catch (err) {
        console.log(err.response);
      }
    };

    callLike(postId, token);
  }

  function handleBookmarkPost(id, token) {
    // dispatch(bookmarkPost({ id, token }));
    const bookmarkCall = async (id, token) => {
      try {
        const response = await axios.post(`/api/users/bookmark/${id}`, {} ,{
          headers: { authorization: token },
        });
        console.log(response);
        return response.data.bookmarks;
      } catch (err) {
        console.log(err,err.response);
        return err;
      }
    };
    bookmarkCall(id, token)
  }

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
          <i
            className="fa-regular fa-heart user-post-footer-icon"
            onClick={() => handleLikeDislikePost(_id, token)}
          ></i>
          <i className="fa-regular fa-message user-post-footer-icon"></i>
          <i className="fa-solid fa-share-nodes user-post-footer-icon"></i>
          <i
            className="fa-regular fa-bookmark user-post-footer-icon"
            onClick={() => handleBookmarkPost(_id, token)}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Post;

import React, { useEffect, useState } from "react";
import "./Post.css";
import { PostDropdown, Comment } from "../index";
import { likePost, dislikePost } from "../../features/posts/postsSlice";
import {
  bookmarkPost,
  removePostFromBookmark,
} from "../../features/users/usersSlice";
import {
  getCommentsForPost,
  createNewCommentToPost,
} from "../../features/comments/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";

function Post({ post, setIsPostEdit, setEditPostId }) {
  const { _id, content, username, name } = post;

  const [isPostLikedBy, setIsPostLikedBy] = useState(false);
  const [isPostBookmark, setIsPostBookmark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentData, setCommentData] = useState({ text: "" });

  const token = localStorage.getItem("token");
  const activeUsername = localStorage.getItem("username");

  const dispatch = useDispatch();
  const postObj = useSelector((state) => state.posts);
  const bookmark = useSelector((state) => state.users.bookmarks);
  const comments = useSelector((state) =>
    state.comments.comments.filter((post) => post._id == _id)
  );

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

  useEffect(() => {
    dispatch(getCommentsForPost({ _id }));
  }, []);

  function handleCommentPost(commentData, postId, token) {
    dispatch(createNewCommentToPost({ commentData, postId, token }));
    setCommentData({ text: "" });
  }

  return (
    <div className="d-flex flex-direction bg-white ">
      <div className="d-flex  user-post-container">
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

            <i
              className="fa-regular fa-message user-post-footer-icon"
              onClick={() => setShowCommentBox((prev) => !prev)}
            ></i>

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

      {showCommentBox && (
        <div>
          <div class="d-flex create-note-container small-gap border-none">
            <img
              class="avatar xs"
              src="https://media-exp1.licdn.com/dms/image/C5603AQEqEDNWTDG0UQ/profile-displayphoto-shrink_100_100/0/1630987867284?e=1657756800&v=beta&t=4IUc0ffA-iWILrgS-rXbYEvU7LAYxCSyi2_Jxa7fdfU"
            />
            <TextareaAutosize
              class="create-post-input note-title-inp pl-1 comment-textarea"
              type="text"
              placeholder="Add a comment"
              onChange={(e) =>
                setCommentData({ ...commentData, text: e.target.value })
              }
              value={commentData.text}
            />
          </div>

          <div className="d-flex j-content-right mr-2 mb-small">
            <button
              className="btn btn-custom-sty btn-custom-small"
              onClick={() => handleCommentPost(commentData, _id, token)}
            >
              Post
            </button>
          </div>

          {comments[0].postComments && (
            <div>
              {comments[0].postComments.map((comment) => {
                return <Comment key={comment._id} comment={comment} postId={_id} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Post;

import React, { useState, useEffect } from "react";
import "./CreatePostBox.css";
import TextareaAutosize from "react-textarea-autosize";
import {
  createNewPost,
  editPost,
  addPostToDraft,
} from "../../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";

function CreatePostBox({ isPostEdit, setIsPostEdit, editPostId }) {
  const [postData, setPostData] = useState({ content: "" });

  const postObj = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (isPostEdit) {
      const postToEdit = postObj.posts.filter((post) => post._id == editPostId);
      setPostData({ ...postData, content: postToEdit[0].content });
    }
  }, [isPostEdit]);

  function handleCreatePostAndEdit(postData, editPostId, token) {
    if (isPostEdit) {
      dispatch(editPost({ postData, editPostId, token }));
      setIsPostEdit((prev) => !prev);
    } else {
      if (postData.content) dispatch(createNewPost({ postData, token }));
    }

    setPostData({ content: "" });
  }

  return (
    <div className="d-flex create-note-container mt-2 mb-2 small-gap">
      <img
        className="avatar xs"
        src="https://media-exp1.licdn.com/dms/image/C5603AQEqEDNWTDG0UQ/profile-displayphoto-shrink_100_100/0/1630987867284?e=1657756800&v=beta&t=4IUc0ffA-iWILrgS-rXbYEvU7LAYxCSyi2_Jxa7fdfU"
      />
      <div className="create-note-container">
        <div className="d-flex title-inp-container mb-2">
          <TextareaAutosize
            className="note-title-inp"
            placeholder="What do you want to talk about?"
            value={postData.content}
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
          />
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="d-flex note-footer mt-2">
          <div className="d-flex note-footer create-note-footer-icons-container">
            <i className="fa-solid fa-image"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-solid fa-face-grin-wide"></i>
          </div>
          <div className="d-flex note-footer justify-cont-right">
            <button
              className="btn pri-outline-btn btn-custom-small"
              onClick={() => dispatch(addPostToDraft({ postData }))}
            >
              Draft
            </button>

            <button
              className="btn btn-custom-sty btn-custom-small ml-small"
              onClick={() =>
                handleCreatePostAndEdit(postData, editPostId, token)
              }
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePostBox;

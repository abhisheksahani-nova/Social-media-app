import React, { useState, useEffect } from "react";
import "./CreatePostBox.css";
import TextareaAutosize from "react-textarea-autosize";
import {
  createNewPost,
  editPost,
  addPostToDraft,
} from "../../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { CreatePollModal, PollBody } from "../../../components/index";
import { useNavigate } from "react-router-dom";

const initialPollState = {
  question: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  showPoll: false,
};

function CreatePostBox({ isPostEdit, setIsPostEdit, editPostId }) {
  const [postData, setPostData] = useState({ content: "" });
  const [pollModal, setPollModal] = useState(false);
  const [pollData, setPollData] = useState(initialPollState);

  const postObj = useSelector((state) => state.posts);
  const theme = useSelector((state) => state.users.theme);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (isPostEdit) {
      const postToEdit = postObj.posts.filter((post) => post._id == editPostId);
      setPostData({ ...postData, content: postToEdit[0].content });
    }
  }, [isPostEdit]);

  function handleCreatePostAndEdit(postInfo, editPostId, token) {
    const postData = { ...postInfo, pollData: { ...pollData } };

    if (isPostEdit) {
      dispatch(editPost({ postData, editPostId, token }));
      setIsPostEdit((prev) => !prev);
    } else {
      if (postData.content || pollData.showPoll) {
        dispatch(createNewPost({ postData, token }));
      }
    }

    setPostData({ content: "" });
    setPollData(initialPollState);
  }

  return (
    <div
      className={`d-flex create-note-container mt-2 mb-2 small-gap ${
        theme == "dark" && "text-dark-theme-clr border-gray3-dark"
      }`}
    >
      <img
        className="avatar xs"
        src="https://media-exp1.licdn.com/dms/image/C5603AQEqEDNWTDG0UQ/profile-displayphoto-shrink_100_100/0/1630987867284?e=1657756800&v=beta&t=4IUc0ffA-iWILrgS-rXbYEvU7LAYxCSyi2_Jxa7fdfU"
      />
      <div
        className={`create-note-container ${
          theme == "dark" && "border-gray3-dark"
        }`}
      >
        <div className="d-flex title-inp-container mb-2">
          <TextareaAutosize
            className={`note-title-inp ${
              theme == "dark" && "dark-theme-bg-clr"
            }`}
            placeholder="What do you want to talk about?"
            value={postData.content}
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
          />
          <i className="fa-solid fa-xmark"></i>
        </div>

        {pollData.showPoll && (
          <PollBody
            pollData={pollData}
            setPollData={setPollData}
            showCloseIcon={true}
          />
        )}

        {pollModal && (
          <CreatePollModal
            setPollModal={setPollModal}
            pollData={pollData}
            setPollData={setPollData}
          />
        )}

        <div className="d-flex note-footer mt-2">
          <div className="d-flex note-footer create-note-footer-icons-container">
            <i className="fa-solid fa-image"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-solid fa-face-grin-wide"></i>
            <i
              className="fa-solid fa-signal"
              onClick={() =>
                token ? setPollModal((prev) => !prev) : navigate("/login")
              }
            ></i>
          </div>
          <div className="d-flex note-footer justify-cont-right">
            <button
              className={`btn pri-outline-btn btn-custom-small ${
                theme == "dark" && "dark-theme-bg-clr border-white"
              }`}
              onClick={() => {
                dispatch(addPostToDraft({ postData }));
                setPostData({ content: "" });
              }}
            >
              Draft
            </button>

            <button
              className="btn btn-custom-sty btn-custom-small ml-small"
              onClick={() =>
                token
                  ? handleCreatePostAndEdit(postData, editPostId, token)
                  : navigate("/login")
              }
            >
              {isPostEdit ? "Edit" : "Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePostBox;

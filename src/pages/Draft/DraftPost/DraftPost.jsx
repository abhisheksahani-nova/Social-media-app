import React from "react";
import "./DraftPost.css";
import { useDispatch, useSelector } from "react-redux";
import { deletePostFromDraft } from "../../../features/posts/postsSlice";

function DraftPost({ draftPost }) {
  const { content, id } = draftPost;
  const dispatch = useDispatch();
  const draftPosts = useSelector((state) => state.posts.draftPosts);

  return (
    <div className="d-flex flex-direction-col user-post-container mt-1">
      <small>{content}</small>
      <div className="d-flex draft-post-footer">
        <div className="cursor-pointer" onClick={() => dispatch(deletePostFromDraft({ id, draftPosts }))}>
          <i class="fa-solid fa-trash-can"></i>
          <small className="ml-small">Delete</small>
        </div>
      </div>
    </div>
  );
}

export default DraftPost;

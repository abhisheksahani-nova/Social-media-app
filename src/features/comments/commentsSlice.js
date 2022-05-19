import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
};

export const getCommentsForPost = createAsyncThunk(
  "comments/getCommentsForPost",
  async (data) => {
    const { _id } = data;

    try {
      const response = await axios.get(`/api/comments/${_id}`);
      console.log(response.data);
      return { _id: _id, postComments: response.data.comments };
    } catch (err) {
      console.log(error);
    }
  }
);

export const createNewCommentToPost = createAsyncThunk(
  "comments/createNewCommentToPost",
  async (data) => {
    const { commentData, token } = data;

    try {
      const response = await axios.post(
        `/api/comments/add/${id}`,
        { commentData },
        {
          headers: { authorization: token },
        }
      );
      return response.data.comments;
    } catch (err) {
      console.log(error);
    }
  }
);

export const deleteCommentOfPost = createAsyncThunk(
  "comments/deleteCommentOfPost",
  async (data) => {
    const { postId, commentId, token } = data;

    try {
      const response = await axios.delete(
        `/api/comments/delete/${postId}/${commentId}`,
        {
          headers: { authorization: token },
        }
      );
      return response.data.comments;
    } catch (err) {
      console.log(error);
      return err;
    }
  }
);

export const editCommentOfPost = createAsyncThunk(
  "comments/editCommentOfPost",
  async (data) => {
    const { commentData, postId, commentId, token } = data;

    try {
      const response = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        { commentData },
        {
          headers: { authorization: token },
        }
      );
      return response.data.comments;
    } catch (err) {
      console.log(error);
    }
  }
);

export const upvoteCommentOfPost = createAsyncThunk(
  "comments/upvoteCommentOfPost",
  async (data) => {
    const { postId, commentId, token } = data;

    try {
      const response = await axios.post(
        `/api/comments/upvote/${postId}/${commentId}`,
        {
          headers: { authorization: token },
        }
      );
      return response.data.comments;
    } catch (err) {
      console.log(error);
      return err;
    }
  }
);

export const downvoteCommentOfPost = createAsyncThunk(
  "comments/downvoteCommentOfPost",
  async (data) => {
    const { postId, commentId, token } = data;

    try {
      const response = await axios.post(
        `/api/comments/downvote/${postId}/${commentId}`,
        {
          headers: { authorization: token },
        }
      );
      return response.data.comments;
    } catch (err) {
      console.log(error);
      return err;
    }
  }
);

const CommentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentsForPost.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    });
  },
});

export default CommentsSlice.reducer;

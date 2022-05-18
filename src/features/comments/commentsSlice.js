import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
};

export const getCommentsForPost = createAsyncThunk(
  "comments/getCommentsForPost",
  async () => {
    try {
      const response = await axios.get(`/api/comments/${id}`);
      console.log(response);
      return response.data.comments;
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
      const response = await axios.post(
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
    builder;
  },
});

export default CommentsSlice.reducer;

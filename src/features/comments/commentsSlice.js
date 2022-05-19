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

      return { _id: _id, postComments: response.data.comments };
    } catch (err) {
      console.log(error);
    }
  }
);

export const createNewCommentToPost = createAsyncThunk(
  "comments/createNewCommentToPost",
  async (data) => {
    const { commentData, postId, token } = data;

    try {
      const response = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        {
          headers: { authorization: token },
        }
      );
      return { _id: postId, postComments: response.data.comments };
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
      console.log(response);
      return { _id: postId, postComments: response.data.comments };
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
    builder
      .addCase(getCommentsForPost.fulfilled, (state, action) => {
        const postId = action.payload._id;
        const filerArray = state.comments.filter((post) => post._id !== postId);
        filerArray.push(action.payload);
        state.comments = filerArray;
      })
      .addCase(createNewCommentToPost.fulfilled, (state, action) => {
        const postId = action.payload._id;
        const filerArray = state.comments.filter((post) => post._id !== postId);
        filerArray.push(action.payload);
        state.comments = filerArray;
      })
      .addCase(deleteCommentOfPost.fulfilled, (state, action) => {
        const postId = action.payload._id;
        const filerArray = state.comments.filter((post) => post._id !== postId);
        filerArray.push(action.payload);
        state.comments = filerArray;
      })
  },
});

export default CommentsSlice.reducer;

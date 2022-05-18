import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  try {
    const response = await axios.get("/api/posts");
    return response.data.posts;
  } catch (err) {
    console.log(error);
  }
});

export const createNewPost = createAsyncThunk(
  "post/createNewPost",
  async (data) => {
    const { postData, token } = data;

    try {
      const response = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: { authorization: token },
        }
      );
      return response.data.posts;
    } catch (err) {
      console.log(error);
    }
  }
);

export const deletePost = createAsyncThunk("post/deletePost", async (data) => {
  const { id, token } = data;

  try {
    const response = await axios.delete(`/api/posts/${id}`, {
      headers: { authorization: token },
    });
    return response.data.posts;
  } catch (err) {
    console.log(error);
    return err;
  }
});

export const editPost = createAsyncThunk("post/editPost", async (data) => {
  const { postData, editPostId, token } = data;

  try {
    const response = await axios.post(
      `/api/posts/edit/${editPostId}`,
      { postData },
      {
        headers: { authorization: token },
      }
    );
    return response.data.posts;
  } catch (err) {
    console.log(error);
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export default postSlice.reducer;

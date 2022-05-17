import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  try {
    const response = await axios.get("/api/posts");
    console.log("response", response);
    return response.data.posts;
  } catch (err) {
    console.log(error);
  }
});

export const createNewPost = createAsyncThunk(
  "post/createNewPost",
  async (data, thunkAPI) => {
    const { postData, token } = data;

    try {
      const response = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: { authorization: token },
        }
      );
      console.log("response", response);
      return response.data.posts;
    } catch (err) {
      console.log(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (data, thunkAPI) => {
    const { token } = data;

    try {
      const response = await axios.delete(`/api/posts/${id}`, {
        headers: { authorization: token },
      });
      console.log("response", response);
      return response.data.posts;
    } catch (err) {
      console.log(error);
    }
  }
);

export const editPost = createAsyncThunk(
  "post/editPost",
  async (data, thunkAPI) => {
    const { postData, token } = data;

    try {
      const response = await axios.post(
        `/api/posts/edit/${id}`,
        { postData },
        {
          headers: { authorization: token },
        }
      );
      console.log("response", response);
      return response.data.posts;
    } catch (err) {
      console.log(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default postSlice.reducer;

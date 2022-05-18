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

export const likePost = createAsyncThunk(
  "post/likePost",
  async (data, { rejectWithValue }) => {
    const { postId, token } = data;
    console.log(data);

    try {
      const response = await axios.post(`/api/posts/like/${postId}`, {
        headers: { authorization: token },
      });
      console.log(response);
      return response.data.posts;
    } catch (err) {
      console.log(error);
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async (data) => {
    const { id, token } = data;

    try {
      const response = await axios.post(`/api/posts/dislike/${id}`, {
        headers: { authorization: token },
      });
      return response.data.posts;
    } catch (err) {
      console.log(error);
      return err;
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
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(likePost.rejected, (state, action) => {
        console.log("rejected", action, state);
      })

      .addCase(dislikePost.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export default postSlice.reducer;

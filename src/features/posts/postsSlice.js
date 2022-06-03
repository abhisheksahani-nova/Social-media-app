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

export const likePost = createAsyncThunk("post/likePost", async (data) => {
  const { _id, token } = data;

  try {
    const response = await axios.post(
      `/api/posts/like/${_id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return response.data.posts;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async (data) => {
    const { _id, token } = data;

    try {
      const response = await axios.post(
        `/api/posts/dislike/${_id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
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
  reducers: {
    sortByMostLiked: (state, action) => {
      const postsArr = [...action.payload.posts];
      const mostLikedPosts = postsArr.sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );

      state.posts = mostLikedPosts;
    },

    sortByLatest: (state, action) => {
      const postsArr = [...action.payload.posts];
      const latestPosts = postsArr.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      state.posts = latestPosts;
    },
  },
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
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export const { sortByMostLiked, sortByLatest } = postSlice.actions;

export default postSlice.reducer;

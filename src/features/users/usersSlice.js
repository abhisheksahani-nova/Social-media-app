import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  currentUser: {},
  user: {},
  bookmarks: [],
  following: [],
  token: localStorage.getItem("token"),
};

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  try {
    const response = await axios.get(`/api/users`);
    return response.data.users;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const getUserById = createAsyncThunk(
  "users/getUserById",
  async (data) => {
    const { id } = data;

    try {
      const response = await axios.get(`/api/users/${id}`);
      return response.data.user;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const getUserLoggedIn = createAsyncThunk(
  "users/getUserLoggedIn",
  async (data) => {
    try {
      const { userLoginData } = data;

      const response = await axios.post("/api/auth/login", userLoginData);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const bookmarkPost = createAsyncThunk(
  "users/bookmarkPost",
  async (data) => {
    const { _id, token } = data;

    try {
      const response = await axios.post(
        `/api/users/bookmark/${_id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      return response.data.bookmarks;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const removePostFromBookmark = createAsyncThunk(
  "users/removePostFromBookmark",
  async (data) => {
    const { _id, token } = data;

    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${_id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      return response.data.bookmarks;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const editUserDetails = createAsyncThunk(
  "users/editUserDetails",
  async (data) => {
    const { userData, token } = data;

    try {
      const response = await axios.post(
        `/api/users/edit`,
        { userData },
        {
          headers: { authorization: token },
        }
      );
      return response.data.user;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const followUser = createAsyncThunk("user/followUser", async (data) => {
  const { id, token } = data;
  console.log(data);

  try {
    const response = await axios.post(
      `/api/users/follow/${id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response.data.followUser;
  } catch (err) {
    console.log(err);
  }
});

export const UnfollowUser = createAsyncThunk(
  "users/UnfollowUser",
  async (data) => {
    const { id, token } = data;

    try {
      const response = await axios.post(
        `/api/users/unfollow/${id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      return response.data.followUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateBookmarks: (state, action) => {
      state.bookmarks = action.payload.updatedBookmarks;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookmarkPost.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })
      .addCase(removePostFromBookmark.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(editUserDetails.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(getUserLoggedIn.fulfilled, (state, action) => {
        state.token = action.payload.encodedToken;
        state.currentUser = action.payload.user;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        if (action.payload) {
          const unfollowUserId = action.payload._id;

          const filerArray = state.following.filter(
            (user) => user._id !== unfollowUserId
          );
          filerArray.push(action.payload);

          state.following = filerArray;
        }
      })
      .addCase(UnfollowUser.fulfilled, (state, action) => {
        if (action.payload) {
          const unfollowUserId = action.payload._id;

          const filerArray = state.following.filter(
            (user) => user._id !== unfollowUserId
          );
          filerArray.push(action.payload);

          state.following = filerArray;
        }
      });
  },
});

export const { updateBookmarks } = UsersSlice.actions;

export default UsersSlice.reducer;

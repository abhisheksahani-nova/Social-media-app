import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  currentUser: {},
  user: {},
  bookmarks: [],
  token: "",
};

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  try {
    const response = await axios.get(`/api/users`);
    console.log(response);
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
      console.log(response);
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
      console.log(response);
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
      console.log(response);
      return response.data.user;
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
      });
  },
});

export const { updateBookmarks } = UsersSlice.actions;

export default UsersSlice.reducer;

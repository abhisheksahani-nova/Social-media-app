import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

// const createNewPost = async (post, token) => {
//   try {
//     const response = await axios.post(
//       "/api/posts",
//       { post },
//       {
//         headers: { authorization: token },
//       }
//     );
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const asyncCreateNewPost = createAsyncThunk(
  "post/createNewPost",
  async (data, thunkAPI) => {
    const { postData, token } = data;
    console.log(data, token);

    try {
      const response = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: { authorization: token },
        }
      );
      console.log("response", response);
      return response.data;
    } catch (err) {
      console.log(error);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncCreateNewPost.fulfilled, (state, action) => {
      console.log(action);
      state.posts.push(action.payload);
    });
  },
});

export default postSlice.reducer;

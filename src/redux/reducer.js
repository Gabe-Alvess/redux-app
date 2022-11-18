import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
});

export const getPostById = createAsyncThunk("posts/getPostById", async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((data) => data.json());
  return res;
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    allNews: [],
    singleNews: {},
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.allNews = payload;
    },
    [getPostById.fulfilled]: (state, { payload }) => {
        state.singleNews = payload
    }
  },
});

export const postReducer = postSlice.reducer;

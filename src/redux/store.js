import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./reducer";

export default configureStore({
  reducer: {
    posts: postSlice.reducer,
  },
});

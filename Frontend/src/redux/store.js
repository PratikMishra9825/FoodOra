import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    //when we will write user:userSlice it means in userSelector as there is state.user where all the states of userSlice can be accessed
    user: userSlice,
  },
});

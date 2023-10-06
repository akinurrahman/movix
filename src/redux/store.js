import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
const store = configureStore({
  reducer: {
    home: homeSlice,
  },
  devTools: true,  
});
export default store;

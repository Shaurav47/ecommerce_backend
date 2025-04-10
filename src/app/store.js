import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../pages/todo/todoSlice";
import { postSlice } from "../pages/todo/postSlice";



// const per = {
//   name: 'hello'
// }

// const c = {
//   [per.name]: 'sello'
// };

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
    [postSlice.name]: postSlice.reducer
  }
});
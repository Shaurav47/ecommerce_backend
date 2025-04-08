import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todos: []
  },
  reducers: {

    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      //Todo:
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);

    }

  }
});


export const { addTodo, removeTodo } = todoSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Todo } from "../model/todo.model";

const initialState: {
  todoData: Todo[];
} = { todoData: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todoData = [...action.payload.todoData, ...state.todoData];
    },
    addTodo: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { setTodo, addTodo } = todoSlice.actions;
export const todoData = (state: RootState) => state.todoState;
export default todoSlice.reducer;

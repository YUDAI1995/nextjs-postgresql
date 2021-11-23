import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as rawUseSelector,
} from "react-redux";
import TodoReducer from "./TodoSlice";

const reducer = combineReducers({
  todoState: TodoReducer,
});

export const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: ["area/setAreaNum"],
  //   },
  // }),
});

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export type AppDispatch = typeof store.dispatch;

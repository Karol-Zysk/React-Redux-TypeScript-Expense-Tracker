import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import expenseReducer from "./expenseReducer";
import nbpDataReducer from "./nbpCourseReducer";

export const createStore = () =>
  configureStore({
    reducer: {
      //@ts-ignore
      expense: expenseReducer, course: nbpDataReducer,
    },
    middleware: [thunk],
  });
export const store = createStore();

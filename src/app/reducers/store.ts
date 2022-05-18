import { configureStore } from "@reduxjs/toolkit";

// import counter from "./counter";
import expenseReducer from "./expenseReducer";

export const store = configureStore({
  reducer: {
    //@ts-ignore
    expense: expenseReducer,
  },
});

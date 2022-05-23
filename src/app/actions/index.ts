import {
  ADD_COUNTER,
  RESET_COUNTER,
  ADD_EXPENSE,
  CLEAR_EXPENSE_LIST,
  DELETE_EXPENSE,
  MAX_EXPENSE,
  NBPDATA_LOAD_START,
  NBPDATA_LOAD_SUCCESS,
  NBPDATA_LOAD_ERROR,
} from "./action.types";

let count = 0;

export const addCounter = () => {
  return {
    type: ADD_COUNTER,
    count: ++count,
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER,
    count: 0,
  };
};

export const addExpense = (text: string, value: number) => {
  return {
    type: ADD_EXPENSE,
    text,
    value,
  };
};

export const clearExpenseList = () => {
  return {
    type: CLEAR_EXPENSE_LIST,
  };
};

export const deleteExpense = (id: number) => {
  return {
    type: DELETE_EXPENSE,
    id,
  };
};
export const maxExpense = (value: number) => {
  return {
    type: MAX_EXPENSE,
    value,
  };
};


export const nbpDataLoadStart = () => ({
	type: NBPDATA_LOAD_START,
});

 export const nbpDataLoadSuccess = (course:number) => ({
	type: NBPDATA_LOAD_SUCCESS,
	payload: course,
});

export const nbpDataLoadError = (errorMessage:{}) => ({
	type: NBPDATA_LOAD_ERROR,
	payload: errorMessage,
});




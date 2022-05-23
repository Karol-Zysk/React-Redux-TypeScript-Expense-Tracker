import { PayloadAction } from "@reduxjs/toolkit";
import {
  NBPDATA_LOAD_START,
  NBPDATA_LOAD_SUCCESS,
  NBPDATA_LOAD_ERROR,
} from "../actions/action.types";

const initialState = {
  isLoading: false,
  course: 4.6,
  errorMessage: null,
};

const nbpDataReducer = (
  state = initialState,
  action: PayloadAction<number>
) => {
  switch (action.type) {
    case NBPDATA_LOAD_START:
      return {
        ...state,
        isLoading: true,
        course: 4.6,
        errorMessage: null,
      };

    case NBPDATA_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        course: action.payload,
      };

    case NBPDATA_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default nbpDataReducer;

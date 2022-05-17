import {
  ADD_EXPENSE,
  CLEAR_EXPENSE_LIST,
  DELETE_EXPENSE,
} from "../actions/action.types";

const initalState = {
  counter: 0,
  list: [{ id: 1, text: "Your Expenses", value: 0 }],
};
//@ts-ignore
const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, text: action.text, value: action.value },
        ],
      };
    case CLEAR_EXPENSE_LIST:
      return initalState;
    case DELETE_EXPENSE:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };

    default:
      return state;
  }
};

export default todos;

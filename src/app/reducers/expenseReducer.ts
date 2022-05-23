import {
  ADD_EXPENSE,
  CLEAR_EXPENSE_LIST,
  DELETE_EXPENSE,
  MAX_EXPENSE,
} from "../actions/action.types";

type Item = {
  id: number;
};



const initalState = {
  counter: 0,

  text: "",
  value: 0,
  list: [],
};

const expenses = (
  state = initalState,
  action: { type: any; text: string; value: string; id: number }
) => {
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
        list: state.list.filter((item: Item) => item.id !== action.id),
      };
    case MAX_EXPENSE:
      return {
        ...state,
        list: state.list.reduce((prev, current) => {
          if (+current["value"] > +prev["value"]) {
            return current;
          } else {
            return prev;
          }
        }),
      };

    default:
      return state;
  }
};

export default expenses;

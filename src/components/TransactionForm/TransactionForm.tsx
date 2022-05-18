import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../app/actions/index";

const ExpenseInput = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    if (text !== "") {
      dispatch(addExpense(text, parseInt(value)));

      setText("");
      setValue("");
    } else {
    }
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="add expense title"
            name="expense title"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <input
            type="number"
            placeholder="add value"
            name="expense value"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>add item</button>
      </form>
    </div>
  );
};

export default ExpenseInput;

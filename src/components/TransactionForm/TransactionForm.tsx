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
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            name="todo"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <input
            type="number"
            className="form-control text-capitalize"
            placeholder="add value"
            name="expense"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <button
          className="btn btn-block btn-primary mt-3"
          onClick={handleSubmit}
        >
          add item
        </button>
      </form>
    </div>
  );
};

export default ExpenseInput;

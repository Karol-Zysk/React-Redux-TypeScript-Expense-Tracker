import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearExpenseList } from "../../app/actions";
import { Container, Wrapper } from "./TransactionsList.style";
import Transaction from "../Transaction/Transaction";

type State = {
  expense: List;
};

type List = {
  list: [];
};

type Prev = {
  value: number;
};

type ExpenseInfo = { text: string; value: number };

const TransactionsList = () => {
  const [maxExp, setMaxExp] = useState();

  const expensesInfo = useSelector((state: State) => state.expense.list);

  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearExpenseList());
  };
  useEffect(() => {
    if (expensesInfo.length !== 0) {
      let max = expensesInfo.reduce(function (prev, current) {
        //@ts-ignore
        if (+current.value > +prev.value) {
          setMaxExp(current);
          return current;
        } else {
          setMaxExp(prev);
          return prev;
        }
      });
    }
  }, [expensesInfo]);

  console.log(maxExp);

  return (
    <Container>
      <Wrapper>
        <p>Lp.</p>
        <p>Expense Name</p>
        <p>PLN</p>
        <p>EUR</p>
        <p>Delete</p>
        {expensesInfo.map((expenseInfo: ExpenseInfo, index) => {
          return (
            <Transaction
              text={expenseInfo.text}
              value={expenseInfo.value}
              id={index}
            />
          );
        })}
      </Wrapper>
      <button type="button" onClick={handleClearList}>
        clear list
      </button>
    </Container>
  );
};

export default TransactionsList;

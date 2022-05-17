import React from "react";
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
type ExpenseInfo = { text: string; value: number };

const TransactionsList = () => {
  const expensesInfo = useSelector((state: State) => state.expense.list);
  const { list } = useSelector((state: List) => state);
  const dispatch = useDispatch();

  console.log(list);

  const handleClearList = () => {
    dispatch(clearExpenseList());
  };

  return (
    <Container>
      <Wrapper>
        <p>Lp.</p>
        <p>Expense Name</p>
        <p>PLN</p>
        <p>EUR</p>
        {expensesInfo.map((expenseInfo: ExpenseInfo, index) => {
          return (
            <Transaction
              text={expenseInfo.text}
              value={expenseInfo.value}
              Lp={index + 1}
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

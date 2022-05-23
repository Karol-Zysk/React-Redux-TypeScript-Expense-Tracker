import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { INBPState } from "../../../type";
import Counter from "../Counter/Counter";
import { MaxExpenseP } from "../TransactionsList/TransactionsList.style";
import { Wrapper } from "./SummedTransactions";

type Props = {
  expensesArray: [];
};

const SummedTransacrions: React.FC<Props> = ({ expensesArray }) => {
  const { course } = useSelector((state: INBPState) => state.course);
  const [transactionsSum, setTransactionsSum] = useState(0);
  const [from] = useState(transactionsSum);

  useEffect(() => {
    const sum = expensesArray.reduce((accumulator, object) => {
      return accumulator + object["value"];
    }, 0);
    setTransactionsSum(sum);
  }, [expensesArray]);

  return (
    <Wrapper>
      <h3>Total Transactions</h3>
      <MaxExpenseP>
        <b>PLN: </b>
        <Counter from={from} to={transactionsSum} />
      </MaxExpenseP>
      <MaxExpenseP>
        <b>EUR: </b>
        <Counter from={from} to={transactionsSum / course} />
      </MaxExpenseP>
    </Wrapper>
  );
};

export default SummedTransacrions;

import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Counter from "../Counter/Counter";
import { MaxExpenseP } from "../TransactionsList/TransactionsList.style";
import { Wrapper } from "./SummedTransactions";

type Props = {
  expensesInfo: [];
};

const SummedTransacrions: React.FC<Props> = ({ expensesInfo }) => {
  const { course } = useAxios();
  const [transactionsSum, setTransactionsSum] = useState(0);
  const [from] = useState(transactionsSum);

  useEffect(() => {
    const sum = expensesInfo.reduce((accumulator, object) => {
      return accumulator + object["value"];
    }, 0);
    setTransactionsSum(sum);
  }, [expensesInfo]);

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

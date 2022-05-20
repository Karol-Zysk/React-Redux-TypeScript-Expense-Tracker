import { motion } from "framer-motion";
import React, { useEffect,  useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../type";
import useAxios from "../../hooks/useAxios";
import Counter from "../Counter/Counter";
import SummedTransacrions from "../SummedTransacrions/SummedTransacrions";
import { H1 } from "../Transaction/Transaction.style";
import { MaxExpense, MaxExpenseP } from "../TransactionsList/TransactionsList.style";



const MaxExpenseTab = () => {
  const { course } = useAxios();
  const [maxExp, setMaxExp] = useState();
  const [actualMax, setActualMax] = useState(1);
  const [from] = useState(0);

  const expensesInfo = useSelector((state: State) => state.expense.list);

  useEffect(() => {
    if (expensesInfo.length !== 0) {
      expensesInfo.reduce(function (prev, current) {
        if (+current["value"] > +prev["value"]) {
          setMaxExp(current);
          return current;
        } else {
          setMaxExp(prev);

          return prev;
        }
      });
    }
  }, [expensesInfo]);

  useEffect(() => {
    if (expensesInfo.length === 0) {
      return;
    } else if (expensesInfo.length === 1) {
      //@ts-ignore
      setActualMax(expensesInfo[0].value);
    } else if (maxExp) {
      setActualMax(maxExp["value"]);
    }
  }, [maxExp, expensesInfo]);

  

  return (
    <MaxExpense
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      {!expensesInfo.length ? (
        <H1>No Transactions</H1>
      ) : (
        <H1>Highest Transaction</H1>
      )}
      {!expensesInfo.length ? null : (
        <div>
          <>
            <MaxExpenseP>
              <b>You paid the most for: </b>
              {expensesInfo.length === 0
                ? ""
                : expensesInfo.length === 1 //@ts-ignore
                ? expensesInfo[0].text
                : maxExp && maxExp["text"]}{" "}
            </MaxExpenseP>

            <MaxExpenseP>
              <b>PLN: </b>
              <Counter from={from} to={actualMax} />
            </MaxExpenseP>
            <MaxExpenseP>
              <b>EUR: </b>
              <Counter from={from} to={actualMax / course} />
            </MaxExpenseP>
          </>
          <SummedTransacrions
          expensesInfo={expensesInfo}/>
        </div>
      )}
    </MaxExpense>
  );
};

export default MaxExpenseTab;

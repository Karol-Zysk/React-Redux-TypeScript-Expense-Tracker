import { motion } from "framer-motion";
import React, { useEffect,  useState } from "react";
import { useSelector } from "react-redux";
import { INBPState, State } from "../../../type";
import Counter from "../Counter/Counter";
import SummedTransacrions from "../SummedTransacrions/SummedTransacrions";
import { H1 } from "../Transaction/Transaction.style";
import { MaxExpense, MaxExpenseP } from "../TransactionsList/TransactionsList.style";



const MaxExpenseTab = () => {
  const { course } = useSelector((state: INBPState) => state.course);
  const [maxExp, setMaxExp] = useState();
  const [actualMax, setActualMax] = useState(1);
  const [from] = useState(0);

  const expensesArray = useSelector((state: State) => state.expense.list);

  useEffect(() => {
    if (expensesArray.length !== 0) {
      expensesArray.reduce(function (prev, current) {
        if (+current["value"] > +prev["value"]) {
          setMaxExp(current);
          return current;
        } else {
          setMaxExp(prev);

          return prev;
        }
      });
    }
  }, [expensesArray]);

  useEffect(() => {
    if (expensesArray.length === 0) {
      return;
    } else if (expensesArray.length === 1) {
      //@ts-ignore
      setActualMax(expensesArray[0].value);
    } else if (maxExp) {
      setActualMax(maxExp["value"]);
    }
  }, [maxExp, expensesArray]);

  

  return (
    <MaxExpense
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      {!expensesArray.length ? (
        <H1>No Transactions</H1>
      ) : (
        <H1>Highest Transaction</H1>
      )}
      {!expensesArray.length ? null : (
        <div>
          <>
            <MaxExpenseP>
              <b>You paid the most for: </b>
              {expensesArray.length === 0
                ? ""
                : expensesArray.length === 1 //@ts-ignore
                ? expensesArray[0].text
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
          expensesArray={expensesArray}/>
        </div>
      )}
    </MaxExpense>
  );
};

export default MaxExpenseTab;

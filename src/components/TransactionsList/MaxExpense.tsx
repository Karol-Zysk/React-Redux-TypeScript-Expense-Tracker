import { animate, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { MaxExpense, MaxExpenseP } from "./TransactionsList.style";
import { State } from "../../../type";
import useAxios from "../../hooks/useAxios";
import { H1 } from "../Transaction/Transaction.style";

function Counter({ from, to }: any) {
  const nodeRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
}

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

  useEffect(() => {
    const sum = expensesInfo.reduce((accumulator, object) => {
      return accumulator + object["value"];
    }, 0);
    console.log(sum);
  }, [expensesInfo]);

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
        </div>
      )}
    </MaxExpense>
  );
};

export default MaxExpenseTab;

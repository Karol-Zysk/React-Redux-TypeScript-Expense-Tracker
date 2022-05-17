import React, { FunctionComponent } from "react";
import useAxios from "../../hooks/useAxios";
import { TableItem } from "./Transaction.style";

type Props = {
  Lp: number;
  text: string;
  value: number;
};

const ExpenseListWrapper: FunctionComponent<Props> = ({ Lp, text, value }) => {
  const { course } = useAxios();
  return (
    <>
      <TableItem>{Lp}</TableItem>
      <TableItem>{text}</TableItem>
      <TableItem>{value}</TableItem>
      <TableItem>
        {(Math.round((value / course) * 100) / 100).toFixed(2)}
      </TableItem>
    </>
  );
};

export default ExpenseListWrapper;

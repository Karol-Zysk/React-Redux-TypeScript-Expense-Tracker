import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../app/actions";
import useAxios from "../../hooks/useAxios";
import { TableItem } from "./Transaction.style";

type Props = {
  text: string;
  value: number;
  id: number;
};

const Transaction: FunctionComponent<Props> = ({ text, value, id }) => {
  const dispatch = useDispatch();

  const { course } = useAxios();
  const handleDelete = () => {
    dispatch(deleteExpense(id));
  };
  return (
    <>
      <TableItem>{id}</TableItem>
      <TableItem>{text}</TableItem>
      <TableItem>{value}</TableItem>
      <TableItem>
        {(Math.round((value / course) * 100) / 100).toFixed(2)}
      </TableItem>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Transaction;

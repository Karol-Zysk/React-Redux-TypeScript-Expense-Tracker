import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INBPState } from "../../../type";
import { deleteExpense } from "../../app/actions";
import {
  Table,
  TableItem,
  Icon,
  IconWrapper,
  TableItemID,
  TableItemValue,
} from "./Transaction.style";

type Props = {
  text: string;
  value: number;
  id: number;
  index: number;
};

const Transaction: FunctionComponent<Props> = ({ text, value, id, index }) => {
  const dispatch = useDispatch();

  const { course } = useSelector((state: INBPState) => state.course);
  const handleDelete = () => {
    dispatch(deleteExpense(id));
  };
  return (
    <Table
      as={motion.div}
      initial={{ opacity: 0.5, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      tabNumber={index}
    >
      <TableItemID>{index + 1}.</TableItemID>
      <TableItem>{text}</TableItem>
      <TableItemValue>
        {value.toFixed(2)} PLN <br></br>
        {(Math.round((value / course) * 100) / 100).toFixed(2)} EUR
      </TableItemValue>

      <IconWrapper>
        <Icon onClick={handleDelete}>X</Icon>
      </IconWrapper>
    </Table>
  );
};

export default Transaction;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearExpenseList } from "../../app/actions";
import {
  ButtonWrapper,
  Container,
  List,
  ListWrapper,
  Table,
} from "./TransactionsList.style";
import Transaction from "../Transaction/Transaction";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { State } from "../../../type";
import { H2 } from "../Transaction/Transaction.style";

type ExpenseInfo = { text: string; value: number; id: number };

const TransactionsList = () => {
  const expensesArray = useSelector((state: State) => state.expense.list);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearExpenseList());
  };

  return (
    <Container>
      <Table>
        {expensesArray.length === 0 ? null : (
          <>
            {" "}
            <ListWrapper
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <H2>Your Expenses</H2>
              <List>
                {expensesArray.map((expense: ExpenseInfo, index) => {
                  return (
                    <Transaction
                      text={expense.text}
                      value={expense.value}
                      id={expense.id}
                      index={index}
                    />
                  );
                })}
              </List>
            </ListWrapper>
            {expensesArray.length !== 0 && (
              <ButtonWrapper
                as={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <Button
                  colorScheme="grey"
                  color="blackAlpha.900"
                  width="15%"
                  justifySelf="flex-end"
                  border="1px"
                  type="button"
                  onClick={handleClearList}
                  fontSize={{ base: "10px ", md: "15px", lg: "18px" }}
                  padding={{ base: " 2px 5px ", md: "12px", lg: "14px" }}
                >
                  Clear
                </Button>
              </ButtonWrapper>
            )}
          </>
        )}
      </Table>
    </Container>
  );
};

export default TransactionsList;

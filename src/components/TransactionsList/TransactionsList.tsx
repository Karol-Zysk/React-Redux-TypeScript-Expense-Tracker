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
import {  H2 } from "../Transaction/Transaction.style";

type ExpenseInfo = { text: string; value: number; id: number };

const TransactionsList = () => {
  const expensesInfo = useSelector((state: State) => state.expense.list);

  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearExpenseList());
  };

  return (
    <Container>
      <Table>
        {expensesInfo.length === 0 ? null : (
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
                {expensesInfo.map((expenseInfo: ExpenseInfo, index) => {
                  return (
                    <Transaction
                      text={expenseInfo.text}
                      value={expenseInfo.value}
                      id={expenseInfo.id}
                      index={index}
                    />
                  );
                })}
              </List>
            </ListWrapper>
            {expensesInfo.length !== 0 && (
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
                  h={{ base: "30px", md: "34px", lg: "38px" }}
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

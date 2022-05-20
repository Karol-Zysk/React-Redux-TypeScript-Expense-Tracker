import { Button, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../app/actions/index";
import {
  Form,
  Message,
  MessageWrapper,
  ButtonWrapper,
  FormTitle,
} from "./TransactionForm.style";

const ExpenseInput = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    if (text !== "" && value !== "") {
      if (parseInt(value) > 99999999999) {
        setMessage("Stop! You are spending too much!");
      } else if (parseInt(value) > 999999) {
        dispatch(addExpense(text, parseInt(value)));
        setMessage("Hello mr.  Musk");
        setText("");
        setValue("");
      } else {
        dispatch(addExpense(text, parseInt(value)));
        setMessage("");
        setText("");
        setValue("");
      }
    }
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Fill the inputs to add expense.</FormTitle>
      <HStack spacing={2}>
        <Input
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          height={{ base: "32px", md: "28px", lg: "34px" }}
          borderColor="whiteAlpha.700"
          color="white"
          focusBorderColor="white"
          _placeholder={{ opacity: 1, color: "whiteAlpha.800" }}
          type="text"
          maxLength={36}
          placeholder="Title"
          name="expense title"
          value={text}
          onChange={(event: {
            target: { value: React.SetStateAction<string> };
          }) => setText(event.target.value)}
        />
        <Input
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          height={{ base: "32px", md: "28px", lg: "34px" }}
          borderColor="whiteAlpha.700"
          color="white"
          focusBorderColor="white"
          _placeholder={{ opacity: 1, color: "whiteAlpha.800" }}
          type="number"
          max="999999999999"
          min="0"
          errorBorderColor="red"
          placeholder="Value PLN"
          name="expense value"
          value={value}
          onChange={(event: {
            target: { value: React.SetStateAction<string> };
          }) => setValue(event.target.value)}
        />
      </HStack>
      <ButtonWrapper>
        <MessageWrapper>
          <Message>{message}</Message>
        </MessageWrapper>
        <Button
          colorScheme="grey"
          color="blackAlpha.900"
          marginRight="1.5rem"
          border="1px"
          onClick={handleSubmit}
          disabled={text === "" || value === ""}
        >
          Add
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default ExpenseInput;

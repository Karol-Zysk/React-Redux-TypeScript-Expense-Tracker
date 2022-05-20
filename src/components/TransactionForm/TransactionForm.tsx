import { Button, HStack, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../app/actions/index";
import useAxios from "../../hooks/useAxios";
import {
  Form,
  Message,
  MessageWrapper,
  ButtonWrapper,
  FormTitle,
} from "./TransactionForm.style";

const ExpenseInput = () => {
  const { course } = useAxios();
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [currency, setCurrency] = useState("EUR");
  console.log(currency);

  const [value, setValue] = useState("");
  const [valueAfterCurrency, setValueAfterCurrency] = useState(1);

  useEffect(() => {
    if (currency === "EUR") {
      setValueAfterCurrency(course);
    } else if (currency === "PLN") {
      setValueAfterCurrency(1);
    }
  }, [currency, valueAfterCurrency, course]);

  const dispatch = useDispatch();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    if (text !== "" && value !== "") {
      if (parseInt(value) > 99999999999) {
        setMessage("Stop! You are spending too much!");
      } else if (parseInt(value) > 999999) {
        dispatch(addExpense(text, parseInt(value) * valueAfterCurrency));
        setMessage("Hello mr.  Musk");
        setText("");
        setValue("");
      } else {
        dispatch(addExpense(text, parseInt(value) * valueAfterCurrency));
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
          height={{ base: "26px", md: "28px", lg: "34px" }}
          w="35%"
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
          w="35%"
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          height={{ base: "26px", md: "28px", lg: "34px" }}
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
        <Select
          fontSize={{ base: "10px", md: "12px", lg: "14px" }}
          height={{ base: "26px", md: "28px", lg: "34px" }}
          w="content"
          textColor="whiteAlpha.800"
          _placeholder={{ opacity: 1, color: "blackAlpha.800" }}
          value={currency}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setCurrency(e.target.value)
          }
        >
          <option
            style={{ color: "white", background: "rgba(0,0,0,0.8)" }}
            value="EUR"
          >
            EUR
          </option>
          <option
            style={{ color: "white", background: "rgba(0,0,0,0.8)" }}
            value="PLN"
          >
            PLN
          </option>
        </Select>
      </HStack>
      <ButtonWrapper>
        <MessageWrapper>
          <Message>{message}</Message>
        </MessageWrapper>
        <Button
          colorScheme="grey"
          color="blackAlpha.900"
          marginRight="1rem"
          border="1px"
          onClick={handleSubmit}
          disabled={text === "" || value === ""}
          h={{ base: "30px", md: "34px", lg: "38px" }}
        >
          Add
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default ExpenseInput;

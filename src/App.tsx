import React from "react";
import { Container, Title } from "./App.style";
import ActualCourse from "./components/ActualCourse/ActualCourse";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionsList from "./components/TransactionsList/TransactionsList";

function App() {
  return (
    <Container>
      <Title>Expense Tracker</Title>
      <ActualCourse />
      <TransactionForm />
      <TransactionsList />
    </Container>
  );
}

export default App;

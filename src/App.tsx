import React from "react";
import { Container, Title } from "./App.style";
import ActualCourse from "./components/ActualCourse/ActualCourse";

function App() {
  return (
    <Container>
      <Title>Expense Tracker</Title>
      <ActualCourse />
    </Container>
  );
}

export default App;

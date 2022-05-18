import React from "react";
import ActualCourse from "../components/ActualCourse/ActualCourse";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import { Container, ImageWrapper, Table, Title, Wrapper } from "./MainPage.style";

const MainPage = () => {
  return (
    <Container>
      <Title>Expense Tracker</Title>
      <Wrapper>
        <Table>
          <ActualCourse />
          <TransactionForm />
        </Table>
        <ImageWrapper>AAA</ImageWrapper>
      </Wrapper>
    </Container>
  );
};

export default MainPage;

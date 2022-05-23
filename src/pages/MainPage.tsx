
import ActualCourse from "../components/ActualCourse/ActualCourse";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import { Container, Table, Wrapper } from "./MainPage.style";
import TransactionsList from "../components/TransactionsList/TransactionsList";
import MaxExpenseTab from "../components/MaxExpense/MaxExpense";

const MainPage = () => {

  

  return (
    <Container>
      <ActualCourse />
      <Wrapper>
        <Table>
          <TransactionForm  />
          <TransactionsList />
        </Table>
        <MaxExpenseTab />
      </Wrapper>
    </Container>
  );
};

export default MainPage;

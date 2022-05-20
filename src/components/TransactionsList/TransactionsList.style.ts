import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 55vh;
`;
export const InitialTable = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10%;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 3px 6px gray;
  padding: 1rem;
  min-height: 50%;
  max-height: 80%;
  overflow-y: scroll;
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const MaxExpense = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;

  box-shadow: 1px 3px 6px gray;
  padding: 2rem;
  border-top-left-radius: 2rem;
  @media (max-width: 768px) {
    width: auto;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    box-shadow: none;
  }
`;

export const MaxExpenseP = styled.p`
  font-size: 1rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  width: auto;
  justify-content: flex-end;
  padding: 1rem;
  align-items: center;
`;

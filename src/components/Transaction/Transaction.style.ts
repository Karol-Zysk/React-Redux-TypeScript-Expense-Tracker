import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";

export const TableItem = styled.div`
  align-items: center;
  box-shadow: 1px 2px 4px black;
  padding: 4px;
  padding-left: 8px;
  display: flex;
  @media (max-width: 1024px) {
    padding: 3px;
  }
  @media (max-width: 768px) {
    padding: 2px;
  }
`;

export const TableItemValue = styled.div`
  align-items: center;
  box-shadow: 1px 2px 4px black;
  padding: 4px;
  padding-left: 8px;
  display: flex;
  justify-content: flex-end;
  text-align: end;
  @media (max-width: 1024px) {
    padding: 3px;
  }
  @media (max-width: 768px) {
    padding: 2px;
  }
`;

export const TableItemID = styled.div`
  align-items: center;
  box-shadow: 1px 2px 4px black;
  padding: 4px;
  padding-left: 8px;
  justify-content: center;
  display: flex;
  font-weight: bold;
  @media (max-width: 1024px) {
    padding: 3px;
  }
  @media (max-width: 768px) {
    padding: 2px;
  }
`;

type Prop = {
  tabNumber: number;
};

export const Table = styled.div<Prop>`
  padding: 0.2rem;
  display: grid;
  grid-template-columns: 0.2fr 2fr 1fr 0.3fr;
  background: ${({ tabNumber }) =>
    tabNumber % 2 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.3)"};
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 4px black;
`;

export const Icon = styled(BsFillTrashFill)`
  font-size: 1.1rem;
  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  cursor: pointer;
  &&:hover {
    transform: scale(1.1);
  }
  color: rgba(255, 255, 255, 0.7);
`;

export const H1 = styled.h1`
  font-size: 3rem;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 486px) {
    font-size: 1.3rem;
  }
`;

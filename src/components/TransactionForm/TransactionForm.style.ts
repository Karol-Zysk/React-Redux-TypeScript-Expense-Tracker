import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  height: 25vh;
  @media (max-width: 768px) {
    height: auto;
  }

  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const FormTitle = styled.h2`
  margin-top: 3rem;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 490px) {
    font-size: 1.2rem;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Message = styled.p`
  font-size: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
`;

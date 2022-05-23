import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
  min-height: 15vh;
  padding: 1rem 0;
  width: 100%;
  @media (max-width: 768px) {
    gap: 1;

    padding: 1rem 0;
  }
`;
export const Date = styled.div`
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 490px) {
    font-size: 0.9rem;
  }
`;
export const ErrorText = styled.p`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 490px) {
    font-size: 0.7rem;
  }
`;

export const Courses = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TodaysCourse = styled.span`
  font-size: larger;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 490px) {
    font-size: 0.9rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    min-height: 100%;
  }
`;

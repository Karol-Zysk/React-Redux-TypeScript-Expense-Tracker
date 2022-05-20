import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem 0;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const Date = styled.p`
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 490px) {
    font-size: 0.9rem;
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

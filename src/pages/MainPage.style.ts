import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  @media (max-width: 768px) {
    height: auto;
    display: block;
    min-height: 100vh;
  }
`;

export const Title = styled.h1`
  color: gold;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    margin-bottom: 2rem;
  }
`;

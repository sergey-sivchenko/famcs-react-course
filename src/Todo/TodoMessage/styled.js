import styled from "styled-components";

export const Todo = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;

  height: 50px;
  width: 300px;
`;

export const TodoIcon = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 20px;

  align-self: center;
`;

export const TodoMessage = styled.div`
  align-self: center;
`;

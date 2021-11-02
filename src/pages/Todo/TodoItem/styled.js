import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin: 4px 0;
  opacity: ${({ isChecked }) => (isChecked ? 0.6 : 1)};
  padding: 4px;
`;

export const Text = styled.p`
  margin: 8px;
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
  user-select: none;
`;

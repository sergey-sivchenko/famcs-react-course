import { useDispatch, useSelector } from "react-redux";

import { CheckBoxOutlineBlank } from "@styled-icons/material-outlined/CheckBoxOutlineBlank";
import { CheckBox } from "@styled-icons/material-outlined/CheckBox";
import { Close } from "@styled-icons/material-outlined/Close";

import { Container, Content, Text } from "./styled";

import { removeTodo, toggleTodo, getTodoById } from "../../../store/todo";

const TodoItem = ({ id }) => {
  const { text, isCompleted } = useSelector((state) => getTodoById(state, id));
  const dispatch = useDispatch();

  const handleTodoClick = async () => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveClick = async () => {
    dispatch(removeTodo(id));
  };

  return (
    <Container isCompleted={isCompleted}>
      <Content onClick={handleTodoClick}>
        {isCompleted ? (
          <CheckBox size={24} title="Checked" />
        ) : (
          <CheckBoxOutlineBlank size={24} title="Unchecked" />
        )}
        <Text isCompleted={isCompleted}>{text}</Text>
      </Content>
      <Close size={24} title="Remove" onClick={handleRemoveClick} />
    </Container>
  );
};

export default TodoItem;

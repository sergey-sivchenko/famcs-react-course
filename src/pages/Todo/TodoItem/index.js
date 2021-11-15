import { CheckBoxOutlineBlank } from "@styled-icons/material-outlined/CheckBoxOutlineBlank";
import { CheckBox } from "@styled-icons/material-outlined/CheckBox";
import { Close } from "@styled-icons/material-outlined/Close";

import { removeTodo, updateTodo } from "storage-requests/todos";
import { Container, Content, Text } from "./styled";

const TodoItem = ({ id, isCompleted, requestTodos, text }) => {
  const handleTodoClick = async () => {
    await updateTodo({ id, isCompleted: !isCompleted, text });

    requestTodos();
  };

  const handleRemoveClick = async () => {
    await removeTodo(id);

    requestTodos();
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

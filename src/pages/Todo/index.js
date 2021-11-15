import { useCallback } from "react";

import { getTodos } from "storage-requests/todos";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Container, SubTitle, Title } from "./styled";
import useAsync from "hooks/use-async";

const Todo = () => {
  const getTodosList = useCallback(() => getTodos(), []);
  const {
    execute: requestTodos,
    isLoading: isTodosLoading,
    value: todos = [],
  } = useAsync(getTodosList);

  return (
    <Container>
      <Title>My first TODO list</Title>
      <SubTitle>Click the items to complete/incomplete them</SubTitle>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          isCompleted={todo.isCompleted}
          requestTodos={requestTodos}
          text={todo.text}
        />
      ))}
      <TodoForm isTodosLoading={isTodosLoading} requestTodos={requestTodos} />
    </Container>
  );
};

export default Todo;

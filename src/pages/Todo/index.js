import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Container, SubTitle, Title } from "./styled";

import { getTodos } from "../../store/todo";

const Todo = () => {
  const todos = useSelector(getTodos);

  return (
    <Container>
      <Title>My first TODO list</Title>
      <SubTitle>Click the items to complete/incomplete them</SubTitle>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} />
      ))}
      <TodoForm isTodosLoading={false} />
    </Container>
  );
};

export default Todo;

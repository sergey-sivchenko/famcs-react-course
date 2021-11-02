import TodoItem from "./TodoItem";

import { Container, SubTitle, Title } from "./styled";

const Todo = () => (
  <Container>
    <Title>My first TODO list</Title>
    <SubTitle>Click the items to complete/incomplete them</SubTitle>
    <TodoItem initialChecked={true} text="Create static page" />
    <TodoItem initialChecked={false} text="Create dynamic page" />
    <TodoItem initialChecked={false} text="Add redux" />
    <TodoItem initialChecked={false} text="Prepare repository for colloquium" />
  </Container>
);

export default Todo;

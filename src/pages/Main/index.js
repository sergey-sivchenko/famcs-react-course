import Header from "components/Header";
import Todo from "pages/Todo";

import { Container } from "./styled";

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Todo />
      </Container>
    </>
  );
};

export default Main;

import Header from "components/Header";
import Todo from "pages/Todo";
import TodosList from "pages/TodosList";
import { Outlet, Routes, Route } from "react-router-dom";

import { Container } from "./styled";

const Main = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Container>
              <Outlet />
            </Container>
          </>
        }
      >
        <Route path="/" element={<TodosList />} />
        <Route path="todos/:todoId" element={<Todo />} />
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Route>
    </Routes>
  );
};

export default Main;

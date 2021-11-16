import { useState } from "react";
import { useDispatch } from "react-redux";

import { AddButton, Container, Input } from "./styled";
import { addTodo } from "../../../store/todo";

const TodoForm = ({ isTodosLoading, requestTodos }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddClick = async () => {
    if (text) {
      dispatch(addTodo({ id: `${Date.now()}`, text, isCompleted: false }));

      setText("");
    }
  };

  return (
    <Container>
      <Input value={text} onChange={handleInputChange}></Input>
      <AddButton disabled={!text || isTodosLoading} onClick={handleAddClick}>
        Add
      </AddButton>
    </Container>
  );
};

export default TodoForm;

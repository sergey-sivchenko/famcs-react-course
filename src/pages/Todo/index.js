import { Component } from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

import { Container, SubTitle, Title } from "./styled";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: 0,
          text: "Create static page",
          initialChecked: true,
        },
        {
          id: 1,
          text: "Create dynamic page",
          initialChecked: false,
        },
        {
          id: 2,
          text: "Add redux",
          initialChecked: false,
        },
        {
          id: 3,
          text: "Prepare repository for colloquium",
          initialChecked: false,
        },
      ],
    };
  }

  addTodo = (text, initialChecked) => {
    const newTodo = {
      id: new Date().getUTCMilliseconds(),
      text,
      initialChecked,
    };

    this.setState((state) => ({ todos: [...this.state.todos, newTodo] }));
  };

  deleteTodo = (id) => {
    this.setState((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
  };

  render() {
    return (
      <Container>
        <Title>My first TODO list</Title>
        <SubTitle>Click the items to complete/incomplete them</SubTitle>
        {this.state.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            initialChecked={todo.initialChecked}
            text={todo.text}
            deleteTodo={this.deleteTodo}
          />
        ))}
        <TodoForm addTodo={this.addTodo} />
      </Container>
    );
  }
}

export default Todo;

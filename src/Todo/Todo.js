import { Component } from "react";

import "./Todo.css";

import TodoMessage from "./TodoMessage/TodoMessage";

class Todo extends Component {
  render() {
    return (
      <div className="todo-container">
        <TodoMessage message="Create static page" icon="checkmark" />
        <TodoMessage message="Create dynamic page" icon="close" />
        <TodoMessage message="Add redux" icon="close" />
      </div>
    );
  }
}

export default Todo;

import { Component } from "react";

import styles from "./index.module.css";

import TodoMessage from "./TodoMessage";

class Todo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <TodoMessage message="Create static page" icon="checkmark" />
        <TodoMessage message="Create dynamic page" icon="close" />
        <TodoMessage message="Add redux" icon="close" />
      </div>
    );
  }
}

export default Todo;

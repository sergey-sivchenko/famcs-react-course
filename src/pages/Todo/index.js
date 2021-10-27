import { Component } from "react";

import styles from "./index.module.css";

import TodoMessage from "./TodoMessage";

class Todo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <TodoMessage message="Create static page" initialChecked />
        <TodoMessage message="Create dynamic page" initialChecked={false} />
        <TodoMessage message="Add redux" initialChecked={false} />
      </div>
    );
  }
}

export default Todo;

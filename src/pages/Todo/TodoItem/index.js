import { Component } from "react";
import { CheckBoxOutlineBlank } from "@styled-icons/material-outlined/CheckBoxOutlineBlank";
import { CheckBox } from "@styled-icons/material-outlined/CheckBox";
import { Close } from "@styled-icons/material-outlined/Close";

import { Container, Text } from "./styled";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.initialChecked,
      id: props.id,
    };

    this.deleteTodo = props.deleteTodo;
  }

  handleClick = () => {
    this.setState((state) => ({ isChecked: !state.isChecked }));
  };

  onDeleteClick = () => {
    this.deleteTodo(this.state.id);
  };

  render() {
    const { text } = this.props;
    const { isChecked } = this.state;

    return (
      <Container isChecked={isChecked} onClick={this.handleClick}>
        {isChecked ? (
          <CheckBox size={24} title="Checked" />
        ) : (
          <CheckBoxOutlineBlank size={24} title="Unchecked" />
        )}
        <Text isChecked={isChecked}>{text}</Text>
        <Close size={24} title="Remove" onClick={this.onDeleteClick} />
      </Container>
    );
  }
}

export default TodoItem;

import { Component } from "react";
import { CheckBoxOutlineBlank } from "@styled-icons/material-outlined/CheckBoxOutlineBlank";
import { CheckBox } from "@styled-icons/material-outlined/CheckBox";

import { Container, Text } from "./styled";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.initialChecked,
    };
  }

  handleClick = () => {
    this.setState((state) => ({ isChecked: !state.isChecked }));
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
      </Container>
    );
  }
}

export default TodoItem;

import { Component } from "react";

import { Container, Input, AddButton } from "./styled";

class TodoForm extends Component {
  constructor(props) {
    super();

    this.state = {
      text: "",
    };

    this.addTodo = props.addTodo;
  }

  onInputChange = (event) => {
    this.setState((state) => ({ text: event.target.value }));
  };

  onButtonClick = () => {
    this.addTodo(this.state.text, false);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <Container>
        <Input value={this.state.text} onChange={this.onInputChange}></Input>
        <AddButton onClick={this.onButtonClick}>Add</AddButton>
      </Container>
    );
  }
}

export default TodoForm;

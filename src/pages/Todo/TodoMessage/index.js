import { Component } from "react";

import CheckMarkIcon from "./img/check-mark.png";
import CloseIcon from "./img/close.png";
import { Container, Icon, Message } from "./styled";

function isLoading() {
  return false;
}

class TodoMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.initialChecked,
    };
  }

  handleClick = (event) => {
    console.log(event);
    this.setState((state) => ({ isChecked: !state.isChecked }));
  };

  render() {
    const { message } = this.props;
    const { isChecked } = this.state;

    console.log(isChecked);

    return (
      <>
        {isLoading() && <div>Loading...</div>}
        {!isLoading() && (
          <Container onClick={this.handleClick}>
            {isChecked ? (
              <Icon src={CheckMarkIcon} alt="Check mark icon" />
            ) : (
              <Icon src={CloseIcon} alt="Close icon" />
            )}
            <Message>{message}</Message>
          </Container>
        )}
      </>
    );
  }
}

export default TodoMessage;

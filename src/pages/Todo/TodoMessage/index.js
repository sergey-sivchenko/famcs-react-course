import React from "react";

import CheckMarkIcon from "./img/check-mark.png";
import CloseIcon from "./img/close.png";
import { Container, Icon, Message } from "./styled";

function isLoading() {
  return false;
}

function TodoMessage(props) {
  return (
    <React.Fragment>
      {isLoading() && <div>Loading...</div>}
      {!isLoading() && (
        <Container>
          {props.icon === "checkmark" && <Icon src={CheckMarkIcon} alt="Check mark icon" />}
          {props.icon === "close" && <Icon src={CloseIcon} alt="Close icon" />}
          <Message>{props.message}</Message>
        </Container>
      )}
    </React.Fragment>
  );
}

export default TodoMessage;

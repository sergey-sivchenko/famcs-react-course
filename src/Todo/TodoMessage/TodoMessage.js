import React from "react";

import * as Styled from "./styled";

import CheckmarkIcon from "./img/check-mark.png";
import CloseIcon from "./img/close.png";

function isLoading() {
  return false;
}

function TodoMessage(props) {
  return (
    <React.Fragment>
      {isLoading() && <div>Loading...</div>}
      {!isLoading() && (
        <Styled.Todo>
          {props.icon === "checkmark" && (
            <Styled.TodoIcon src={CheckmarkIcon} alt="checkmark" />
          )}

          {props.icon === "close" && (
            <Styled.TodoIcon src={CloseIcon} alt="checkmark" />
          )}

          <Styled.TodoMessage>{props.message}</Styled.TodoMessage>
        </Styled.Todo>
      )}
    </React.Fragment>
  );
}

export default TodoMessage;

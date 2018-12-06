import React, { PureComponent } from "react";

import {
  MessageFormContainer,
  MessageRealForm,
  TextInput,
  SubmitInput
} from "./style";

class MessageForm extends PureComponent {
  render() {
    const { handleSubmit, handleKeydown, userData } = this.props;
    return (
      <MessageFormContainer>
        <MessageRealForm onSubmit={handleSubmit}>
          <TextInput
            type="text"
            name="message"
            placeholder="Message"
            autoComplete="off"
            onKeyDown={handleKeydown}
          />
          <SubmitInput type="submit" value={`submit ${userData.name}`} />
        </MessageRealForm>
      </MessageFormContainer>
    );
  }
}

export default MessageForm;

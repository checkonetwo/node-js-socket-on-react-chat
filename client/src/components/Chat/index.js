import React, { PureComponent } from "react";

class Chat extends PureComponent {
  render() {
    const { messages } = this.props;
    return (
      <div>
        {messages.map(m => (
          <div>
            <b>{m.name}</b>: <span>{m.msg}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Chat;

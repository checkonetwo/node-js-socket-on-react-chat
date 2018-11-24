import React, { Component } from "react";

class MessageForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="text" name="message" placeholder="Your Message" />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default MessageForm;

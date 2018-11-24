import React, { Component } from "react";
import io from "socket.io-client";
import MessageForm from "./components/MessageForm";
import Chat from "./components/Chat";

const socket = io("http://localhost:8000");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgs: []
    };
    socket.on("new message", msg => {
      this.setState({
        msgs: [...this.state.msgs, msg]
      });
    });
  }

  componentDidMount() {}

  handleMessageSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const msg = e.target.message.value;

    const msgObj = {
      name,
      msg
    };

    socket.emit("message", msgObj);
  };

  render() {
    const { msgs } = this.state;
    console.log(msgs);
    return (
      <div className="App">
        <MessageForm handleSubmit={this.handleMessageSubmit} />
        <Chat messages={msgs} />
      </div>
    );
  }
}

export default App;

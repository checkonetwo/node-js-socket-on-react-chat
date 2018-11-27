import React, { Component } from "react";
import io from "socket.io-client";

import Registration from "./components/Registration";
import MessageForm from "./components/MessageForm";
import Chat from "./components/Chat";
import UsersOnline from "./components/UsersOnline";

// Styles

import RootStyles from "./styles/root";
import GlobalStyles from "./styles/global";

import { AppContainer, ChatWindow } from "./styles/App";

class App extends Component {
  state = {
    user: {
      isRegistered: false,
      name: null
    },
    usersOnline: [],
    // user: {
    //   isRegistered: true,
    //   name: "🦊"
    // },
    // usersOnline: ["🦊", "🦊"],
    msgs: [
      { name: "🦊", msg: "Welcome to chat!", ts: 154325811100 },
      { name: "🦊", msg: "Hello, there!", ts: 154325810200 },
      {
        name: "🦊",
        msg: "Thx, i'm fine! dakllksdlas dasldklaskdlas d dkasldkaslkda",
        ts: 154325812400
      }
    ]
  };

  constructor(props) {
    super(props);
    this.socket = io("http://10.10.2.237:8000");

    this.socket.on("new message", msg => {
      this.setState({
        msgs: [...this.state.msgs, msg]
      });
    });

    this.socket.on("disconnect", () => {
      this.socket.emit("disconnect", this.state.user.name);
    });

    this.socket.on("users online", users => {
      console.log(users, " online");
      this.setState({
        usersOnline: users
      });
    });
  }

  handleMessageSubmit = e => {
    e.preventDefault();
    const { user } = this.state;
    const msg = e.target.message.value;

    const msgObj = {
      type: "message",
      name: user.name,
      msg,
      ts: Math.floor(Date.now())
    };
    if (msg.length !== 0) {
      this.socket.emit("message", msgObj);
    }
    e.target.message.value = "";
  };

  handleRegistration = name => {
    this.socket.emit("join", name);

    this.setState({
      user: {
        isRegistered: true,
        name
      }
    });
  };

  render() {
    const { msgs, user, usersOnline } = this.state;

    return (
      <React.Fragment>
        <RootStyles />
        <GlobalStyles />
        {user.isRegistered ? (
          <AppContainer>
            <UsersOnline users={usersOnline} />
            <ChatWindow>
              <Chat messages={msgs} userData={user} />
              <MessageForm
                handleSubmit={this.handleMessageSubmit}
                userData={user}
              />
            </ChatWindow>
          </AppContainer>
        ) : (
          <Registration handleRegistration={this.handleRegistration} />
        )}
      </React.Fragment>
    );
  }
}

export default App;

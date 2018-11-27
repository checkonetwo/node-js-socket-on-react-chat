import React, { PureComponent } from "react";
import Moment from "react-moment";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import {
  MessagesContainer,
  Message,
  JoinedMessage,
  MessageContent,
  MessageName,
  MessageText
} from "./style";

class Chat extends PureComponent {
  render() {
    const { messages, userData } = this.props;
    return (
      <MessagesContainer>
        <ReactCSSTransitionGroup
          transitionName="anim"
          transitionAppear={false}
          transitionEnterTimeout={700}
          transitionEnter={true}
          transitionLeave={false}
        >
          {messages
            .sort((a, b) => b.ts - a.ts)
            .map(m =>
              m.type === "joined" ? (
                <JoinedMessage key={m.ts}>
                  {m.name} &nbsp;has joined&nbsp;
                  <Moment fromNow>{m.ts}</Moment>
                </JoinedMessage>
              ) : (
                <Message key={m.ts} isYourMessage={userData.name === m.name}>
                  <MessageName>
                    <span>{m.name}</span>
                  </MessageName>
                  <MessageContent isYourMessage={userData.name === m.name}>
                    <MessageText>{m.msg}</MessageText>
                    <MessageText>
                      <Moment fromNow>{m.ts}</Moment>
                    </MessageText>
                  </MessageContent>
                </Message>
              )
            )}
        </ReactCSSTransitionGroup>
      </MessagesContainer>
    );
  }
}

export default Chat;

import React, { PureComponent } from "react";

import { UsersContainer, User } from "./style";

class TypingUsers extends PureComponent {
  render() {
    const { users } = this.props;
    return (
      <UsersContainer>
        {Object.keys(users).map(id => (
          <User key={id}>
            <span>{users[id].name}</span>
            <span>{users[id].isTyping ? "typing" : false}</span>
          </User>
        ))}
      </UsersContainer>
    );
  }
}

export default TypingUsers;

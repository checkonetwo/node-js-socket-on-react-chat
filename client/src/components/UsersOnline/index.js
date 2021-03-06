import React, { PureComponent } from "react";

import { UsersContainer, User } from "./style";

class UsersOnline extends PureComponent {
  render() {
    const { users } = this.props;
    return (
      <UsersContainer>
        {Object.keys(users).map(id => (
          <User key={id}>
            <span>{users[id].name}</span>
          </User>
        ))}
      </UsersContainer>
    );
  }
}

export default UsersOnline;

import React, { PureComponent } from "react";

import { UsersContainer, User } from "./style";

class UsersOnline extends PureComponent {
  render() {
    const { users } = this.props;
    return (
      <UsersContainer>
        {users.map(name => (
          <User key={name}>
            <span>{name}</span>
          </User>
        ))}
      </UsersContainer>
    );
  }
}

export default UsersOnline;

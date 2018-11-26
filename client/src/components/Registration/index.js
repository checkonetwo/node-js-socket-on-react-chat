import React, { PureComponent } from "react";

import { RegContainer, RegTitle, NamesList, Name } from "./style";

class Registration extends PureComponent {
  state = {
    names: ["🦊", "🐷", "🐵", "🦁", "🐸"]
  };

  render() {
    const { names } = this.state;
    const { handleRegistration } = this.props;
    return (
      <RegContainer>
        <RegTitle>Registration:</RegTitle>
        <NamesList>
          {names.map(name => (
            <Name key={name} onClick={() => handleRegistration(name)}>
              {name}
            </Name>
          ))}
        </NamesList>
      </RegContainer>
    );
  }
}

export default Registration;

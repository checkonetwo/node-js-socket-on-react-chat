import styled from "styled-components";

export const UsersContainer = styled.div`
  position: absolute;
  left: -42px;
  font-size: 1.4rem;
  line-height: 1em;
  width: 32px;
  top: 58px;
  text-align: center;
`;

export const User = styled.div`
  background-color: #fff;
  width: 32px;
  height: 32px;
  margin-bottom: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    position: relative;
    top: 2px;
    left: 1px;
  }
`;

import styled from "styled-components";

export const UsersContainer = styled.div`
  position: absolute;
  left: -58px;
  font-size: 1.4rem;
  line-height: 1em;
  width: 88px;
  top: 32px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
`;

export const UsersTitle = styled.div`
  margin-bottom: 12px;
  font-size: 1.2rem;
  width: 100%;
  text-align: left;
`;

export const User = styled.div`
  background-color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 12px 12px 0;
  span {
    position: relative;
    top: 1px;
    left: 1px;
  }
`;

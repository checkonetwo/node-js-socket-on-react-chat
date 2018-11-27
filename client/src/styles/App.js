import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  padding: 30px;
  transform: translateZ(0);
  display: flex;
`;

export const ChatWindow = styled.div`
  position: relative;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: #fff;
  width: 420px;
  height: 600px;
  overflow: scroll;
  box-shadow: 0px 1px 30px 0px rgba(10, 16, 34, 0.05);
`;

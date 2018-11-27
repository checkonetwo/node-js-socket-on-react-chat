import styled from "styled-components";

export const MessagesContainer = styled.div`
  padding: 36px 18px 36px 18px;
`;

export const Message = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: ${p => (p.isYourMessage ? "row-reverse" : "row")};
  margin: ${p =>
    p.isYourMessage ? "14px 6px 14px 24px" : "14px 24px 14px 6px"};
`;

export const JoinedMessage = styled.div`
  width: 100%;
  font-size: 1.2rem;
  margin: 16px 0 16px 24px;
`;

export const MessageContent = styled.div`
  padding: 10px 14px 8px 14px;
  font-size: 1.4rem;
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  border: 1px solid
    ${p => (p.isYourMessage ? "var(--blue)" : "var(--border-color)")};
  background-color: ${p =>
    p.isYourMessage ? "var(--blue)" : " rgba(0, 0, 0, 0.04)"};
  color: ${p => (p.isYourMessage ? "#fff" : "var(--text-color)")};
`;

export const MessageName = styled.div`
  width: 36px;
  height: 36px;
  font-size: 1.8rem;
  border-radius: 50%;
  margin-top: 14px;
  line-height: 1em;
  margin-right: 12px;
  margin-left: 12px;
  text-align: center;
  span {
    position: relative;
    bottom: 2px;
  }
`;

export const MessageText = styled.div`
  font-size: 1.4rem;
  width: 100%;

  time {
    font-size: 1rem;
    opacity: 0.8;
  }
`;

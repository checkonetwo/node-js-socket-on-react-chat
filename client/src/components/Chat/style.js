import styled from "styled-components";

export const MessagesContainer = styled.div`
  padding: 36px 36px 36px 28px;
`;

export const Message = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const MessageContent = styled.div`
  padding: 10px 14px 8px 14px;
  font-size: 1.4rem;

  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  border: 1px solid
    ${p => (p.isYourMessage ? "var(--border-color)" : "var(--blue)")};
  background-color: ${p =>
    p.isYourMessage ? "rgba(0, 0, 0, 0.04)" : "var(--blue)"};
  color: ${p => (p.isYourMessage ? "var(--text-color)" : "#fff")};
`;

export const MessageName = styled.div`
  float: left;
  width: 36px;
  height: 36px;
  font-size: 1.8rem;
  border-radius: 50%;
  margin-top: 14px;
  line-height: 1em;
  margin-right: 12px;

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

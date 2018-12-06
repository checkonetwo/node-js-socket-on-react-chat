import styled from "styled-components";

export const MessagesContainer = styled.div`
  padding: 18px;
  min-height: 600px;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -140px;
    left: 0;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2)
    );
    z-index: 100;
  }

  & > span {
    position: absolute;
    left: 0;
    bottom: 80px;
    overflow: hidden;
    width: 100%;
    /* fix here */
  }
`;

export const Message = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: ${p => (p.isYourMessage ? "row-reverse" : "row")};
  margin: ${p => (p.isYourMessage ? "8px 6px 8px 36px" : "8px 36px 8px 6px")};
`;

export const JoinedMessage = styled.div`
  width: 100%;
  font-size: 1.2rem;
  margin: 16px 0 16px 24px;
`;

export const MessageContent = styled.div`
  padding: 10px 14px 8px 14px;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 1.4rem;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid
    ${p => (p.isYourMessage ? "var(--blue)" : "var(--border-color)")};
  background-color: ${p =>
    p.isYourMessage ? "var(--blue)" : "var(--bg-color)"};
  color: ${p => (p.isYourMessage ? "#fff" : "var(--text-color)")};
  box-shadow: 0 1px 0 0
    ${p => (p.isYourMessage ? "rgba(0,0,0,0.8)" : "rgba(10, 16, 34, 0.15)")};
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

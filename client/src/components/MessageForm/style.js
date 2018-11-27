import styled from "styled-components";

export const MessageFormContainer = styled.div`
  position: sticky;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0px -10px 30px 0px rgba(10, 16, 34, 0.07);
`;

export const MessageRealForm = styled.form`
  height: 60px;
  width: 100%;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  display: flex;
`;

export const TextInput = styled.input`
  width: 75%;
  height: 100%;
  border: 0;
  padding: 24px;
  font-size: 1.4rem;
`;

export const SubmitInput = styled.input`
  text-align: center;
  padding: 0px 14px 0 18px;
  width: 25%;
  height: 100%;
  border: 0;
  background-color: var(--blue);
  color: #fff;
  font-size: 1.4rem;
  text-transform: capitalize;
  cursor: pointer;
  min-width: 90px;
`;

import styled from "styled-components";

export const MessageFormContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const MessageRealForm = styled.form`
  height: 60px;
  width: 100%;
  border-top: 1px solid var(--border-color);
  display: flex;
`;

export const TextInput = styled.input`
  width: 80%;
  height: 100%;
  border: 0;
  padding: 24px;
  font-size: 1.4rem;
`;

export const SubmitInput = styled.input`
  width: 20%;
  height: 100%;
  border: 0;
  background-color: var(--blue);
  color: #fff;
  font-size: 1.4rem;
  text-transform: capitalize;
  cursor: pointer;
  min-width: 90px;
`;

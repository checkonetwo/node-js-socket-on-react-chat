import styled from "styled-components";

export const RegContainer = styled.div``;

export const RegTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2.4rem;
  color: #000;
  margin-bottom: 24px;
`;

export const NamesList = styled.div`
  display: flex;
  font-size: 5rem;
`;

export const Name = styled.div`
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 100px;
  line-height: 100px;
  text-align: center;
  margin: 0 12px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #fafafa;
  border: #fafafa;
  border-radius: 20px;
  justify-content: center;
  font-family: "Roboto Mono", monospace;
  font-size: 20px;

  height: 62px;
  width: 80%;

  margin: 20px;

  display: flex;
  align-items: center;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ffffff40;
    cursor: pointer;
    transition: background-color 0.2.5s ease;

    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.2);
  }
`;

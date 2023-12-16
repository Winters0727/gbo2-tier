import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  border-radius: 8px;
  background-color: ${(props) => props.style?.backgroundColor || "#FFFFFF"};
  color: #ffffff;
  font-weight: 700;
  font-size: 32px;
  padding: 16px 16px;
  cursor: pointer;
`;

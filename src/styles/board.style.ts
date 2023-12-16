import styled from "styled-components";

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: max-content;
  background-color: ${(props) => props.style?.backgroundColor || "#FFFFFF"};
  border: solid 2px black;
  border-radius: 5px;
`;

export const Row = styled.div`
  display: flex;
  column-gap: 16px;
  border-bottom: solid 2px black;

  &:last-child {
    border-bottom: 0px;
  }
`;

export const Cost = styled.div`
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  border-right: solid 2px black;
  font-weight: 700;
  font-size: 32px;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

export const TagWrapper = styled.div`
  display: flex;
  margin-left: auto;
  column-gap: 8px;
  font-weight: 700;
  font-size: 20px;
`;

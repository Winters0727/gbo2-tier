import styled from "styled-components";

export const Header = styled.header`
  margin: 0 auto;
  font-weight: 700;
  font-size: 64px;
`;

export const Datetime = styled.div`
  margin-left: auto;
  font-weight: 700;
  font-size: 32px;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 0 auto;
  row-gap: 32px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  column-gap: 8px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: max-content;
  font-weight: 700;
  font-size: 20px;
  row-gap: 8px;

  & div {
    text-align: center;
  }
`;

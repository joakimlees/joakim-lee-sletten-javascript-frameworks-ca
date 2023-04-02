import styled from "styled-components";

export const Footer = styled.footer`
  color: ${({ theme }) => theme.color.yellow};
  background-color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.family.paragraphs};
  font-size: ${({ theme }) => theme.font.size.small};
  padding: 50px 20px;
  margin-top: 50px;
`;

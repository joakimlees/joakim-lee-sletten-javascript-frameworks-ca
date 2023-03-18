import styled from "styled-components";

export const Footer = styled.footer`
  color: ${props => props.theme.color.lightgreen};
  background-color: ${props => props.theme.color.dark};
  font-family: ${props => props.theme.font.family.paragraphs};
  font-size: ${props => props.theme.font.size.small};
  padding: 50px 20px;
`;

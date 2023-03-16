import styled from "styled-components";

export const BaseList = styled.ul`
  padding: 0px;
  list-style: none;
`;

export const TopNavList = styled(BaseList)`
  display: flex;
  justify-content: space-evenly;
  color: ${props => props.theme.color.lightgreen};
  font-family: ${props => props.theme.font.paragraphs};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: ${props => props.theme.fontSize.medium};
`;

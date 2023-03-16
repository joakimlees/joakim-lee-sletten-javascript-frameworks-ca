import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.lightgreen};
  font-size: ${props => props.theme.fontSize.medium};
`;

export const CartIconWrapper = styled.div`
  width: 35px;
`;

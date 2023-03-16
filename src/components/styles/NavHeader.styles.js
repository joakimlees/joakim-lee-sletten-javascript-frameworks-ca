import styled from "styled-components";

export const NavHeader = styled.header`

  padding: 10px 5px;
  background-color: ${props => props.theme.color.dark};
  color: ${props => props.theme.color.lightgreen};
  font-size: ${props => props.theme.fontSize.xLarge};
  }

  nav {
    flex-grow: 1;
  }

`;

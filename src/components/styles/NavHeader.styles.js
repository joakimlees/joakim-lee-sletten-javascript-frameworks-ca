import styled from "styled-components";

export const NavHeaderStyles = styled.header`
  border-style: solid;
  border-color: red;
  }

  nav {
    flex-grow: 1;
    ul {
      display: flex;
      justify-content: space-evenly;
      li {
        list-style: none;

      }
      
      padding: 0px;
      font-family: ${props => props.theme.fonts.headings};
      font-weight: 400;
    }

  }

`;

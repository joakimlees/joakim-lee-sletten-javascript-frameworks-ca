import styled from "styled-components";

export const NavHeader = styled.header`
  border-style: solid;
  border-color: red;
  padding: 10px 5px;
  background-color: ${props => props.theme.color.light}
  }

  nav {
    flex-grow: 1;
    ul {
      display: flex;
      justify-content: space-evenly;
      padding: 0px;
      li {
        border-style: solid;
        list-style: none;
        color: ${props => props.theme.color.dark};
        font-family: ${props => props.theme.font.paragraphs};
        font-weight: ${props => props.theme.fontWeight.bold};
       

      }
      
    }

  }

`;

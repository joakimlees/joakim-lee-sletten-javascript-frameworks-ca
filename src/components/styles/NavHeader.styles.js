import styled from "styled-components";

export const NavHeader = styled.header`

  padding: 10px 5px;
  background-color: ${props => props.theme.color.dark};
  color: ${props => props.theme.color.lightgreen};
  font-size: ${props => props.theme.fontSize.xLarge};
  }

  nav {
    flex-grow: 1;
    ul {
      display: flex;
      justify-content: space-evenly;
      padding: 0px;
      li {

        list-style: none;
        color: ${props => props.theme.color.lightgreen};
        font-family: ${props => props.theme.font.paragraphs};
        font-weight: ${props => props.theme.fontWeight.semiBold};
        font-size: ${props => props.theme.fontSize.medium};
   
       

      }
      
    }

  }

`;

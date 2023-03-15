import styled from "styled-components";

export const NavHeaderStyles = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: red;
  color: white;
  font-size: 20px;
  nav {
    background-color: blue;
    ul {
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      padding: 0px;
      margin: 0px;
      li {
        margin: 0px 30px;
      }
    }
  }
`;

import styled from "styled-components";

export const Cart = styled.main`
  flex-grow: 1;

  ul {
    padding: 0px;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;

    a,
    button {
      text-align: center;
      color: black;
      border: solid;
      width: 50%;
      padding: 20px;
      background-color: yellow;
      margin: 0px 10px;
      text-decoration: none;
    }
  }
`;

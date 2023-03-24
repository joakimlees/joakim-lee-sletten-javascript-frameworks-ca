import styled from "styled-components";

export const Product = styled.main`
  flex-grow: 1;

  h1 {
    color: red;
    text-align: center;
  }

  .product-content-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

    button,
    a {
      display: flex;
      text-decoration: none;
      padding: 20px;
      background-color: lightgreen;
      border: solid;
      color: black;
      justify-content: center;
    }

    .product-info-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: 50%;
      min-width: 300px;

      a {
        background-color: yellow;
      }
    }

    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;

      img {
        width: 100%;
        height: 100%;
        min-width: 300px;
        object-fit: cover;
      }
    }
  }
`;

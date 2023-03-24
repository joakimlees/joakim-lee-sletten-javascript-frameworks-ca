import styled from "styled-components";

export const Product = styled.main`
  flex-grow: 1;

  h1 {
    color: red;
  }

  article {
    border: solid;
    text-align: center;
  }

  .product-content-wrapper {
    display: flex;
    flex-wrap: wrap;
    border: solid;
    border-color: blue;

    .product-info-wrapper {
      border: solid;
      border-color: lightgreen;
    }

    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      border: solid;
      border-color: pink;

      img {
        width: 100%;
        height: 100%;
        min-width: 300px;
        object-fit: cover;
      }
    }
  }
`;

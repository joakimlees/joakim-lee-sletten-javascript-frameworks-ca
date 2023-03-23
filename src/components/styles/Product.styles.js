import styled from "styled-components";

export const Product = styled.main`
  flex-grow: 1;

  h1 {
    color: red;
  }

  article {
    border: solid;
  }

  .product-info-wrapper {
    display: flex;
    flex-wrap: wrap;

    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        min-width: 300px;
        object-fit: cover;
      }
    }
  }
`;

import styled from "styled-components";

export const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-style: solid;
  background-color: lightblue;

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

  .price-wrapper {
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: lightgreen;
    padding: 10px;
  }
`;

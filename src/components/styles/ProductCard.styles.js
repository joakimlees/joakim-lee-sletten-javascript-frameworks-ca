import styled from "styled-components";

export const ProductCard = styled.article`
  border-style: solid;
  background-color: lightblue;
  display: grid;

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

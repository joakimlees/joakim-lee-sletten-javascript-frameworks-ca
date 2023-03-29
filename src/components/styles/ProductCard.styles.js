import styled from "styled-components";

export const ProductCard = styled.li`
  padding: 10px;
  border-style: solid;
  background-color: lightblue;

  article {
    display: flex;
    flex-direction: column;
  }

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

  .button-wrapper {
    display: flex;
    justify-content: space-between;
  }

  a,
  button {
    text-align: center;
    text-decoration: none;
    background-color: lightgreen;
    color: black;
    font-weight: bold;
    border: solid;
    padding: 10px;
    width: 100%;
  }
`;

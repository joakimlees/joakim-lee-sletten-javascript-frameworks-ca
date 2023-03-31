import styled from "styled-components";

export const CartItem = styled.li`
  border-style: solid;
  list-style: none;
  margin: 10px;

  article {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px 25px;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      min-width: 150px;
    }
  }

  .middle-wrapper {
    flex-grow: 1;
  }

  .image-wrapper,
  .middle-wrapper,
  .quantity-wrapper {
    margin: 0px 10px;
  }
`;

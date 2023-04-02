import styled from "styled-components";

export const ProductCard = styled.li`
  padding: 10px;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.yellow};

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
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .old-price {
      text-decoration: line-through;
    }

    .discount-value {
      padding: 5px;
      border-radius: 5px;
      border: solid;
      border-width: 1px;
      color: ${({ theme }) => theme.color.dark};
      background-color: ${({ theme }) => theme.color.green};
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: space-between;
  }

  a,
  button {
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    padding: 10px;
    width: 100%;
  }

  a {
    background-color: ${({ theme }) => theme.color.primary};
    color: white;

    margin-left: 2.5px;
  }
  button {
    background-color: ${({ theme }) => theme.color.green};
    margin-right: 2.5px;
    border: solid;
    border-width: 2px;
  }
`;

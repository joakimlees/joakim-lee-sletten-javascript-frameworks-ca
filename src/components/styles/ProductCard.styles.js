import styled from "styled-components";

export const ProductCard = styled.li`
  padding: 10px;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.yellow};

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.font.family.headings};
  }

  article {
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.font.family.paragraphs};
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
      color: ${({ theme }) => theme.color.red};
      background-color: white;
      padding: 3px;
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
    font-family: ${({ theme }) => theme.font.family.buttons};
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
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 2.5px;

    :hover {
      border-width: 1px;
      border-color: ${({ theme }) => theme.color.primary}
      color: ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color.green};
    }
  }
  button {
    background-color: ${({ theme }) => theme.color.green};
    margin-right: 2.5px;
    margin-top: 10px;
    margin-bottom: 5px;
    border: solid;
    border-width: 2px;

    :hover {
      background-color: white;
    }

    :active {
      color: white;
      background-color: ${({ theme }) => theme.color.dark};
    }
  }
`;

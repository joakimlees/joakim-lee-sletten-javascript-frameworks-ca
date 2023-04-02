import styled from "styled-components";

export const Cart = styled.main`
  flex-grow: 1;

  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.font.family.headings};
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.font.size.xLarge};
    text-align: center;
  }

  ul {
    padding: 0px;

    li {
      background-color: ${({ theme }) => theme.color.yellow};
      font-family: ${({ theme }) => theme.font.family.paragraphs};
      border-color: ${({ theme }) => theme.color.primary};
      border-width: 2px;
    }
    h3 {
      font-size: ${({ theme }) => theme.font.size.medium};
      text-align: left;
    }
  }

  .total-price {
    margin: 0px 0px 20px;
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.bold};

    text-align: center;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    gap: 5px;
    max-width: 800px;
    margin: 0px auto;

    button,
    a {
      font-family: ${({ theme }) => theme.font.family.buttons};
      border-radius: 5px;
      width: 100%;
      text-align: center;
      text-decoration: none;
      padding: 10px;
      background-color: ${({ theme }) => theme.color.green};
      border: solid;
      color: ${({ theme }) => theme.color.primary};
      font-weight: ${({ theme }) => theme.font.weight.bold};

      :hover {
        background-color: ${({ theme }) => theme.color.primary};
        color: white;
        border-color: ${({ theme }) => theme.color.primary};
      }

      :active {
        background-color: white;
        color: ${({ theme }) => theme.color.primary};
      }
    }

    a {
      background-color: ${({ theme }) => theme.color.yellow};
    }
  }

  .no-products-message {
    text-align: center;
  }
`;

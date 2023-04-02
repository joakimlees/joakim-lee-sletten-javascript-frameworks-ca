import styled from "styled-components";

export const CheckoutSuccess = styled.main`
  flex-grow: 1;

  article {
    text-align: center;
    a {
      color: ${({ theme }) => theme.color.primary};
      font-size: ${({ theme }) => theme.font.size.medium};
    }
  }

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
      background-color: ${({ theme }) => theme.color.green};
      font-family: ${({ theme }) => theme.font.family.paragraphs};
      border-color: ${({ theme }) => theme.color.primary};
      border-width: 2px;
    }
    h3 {
      font-size: ${({ theme }) => theme.font.size.medium};
      text-align: left;
    }

    div {
      text-align: left;
    }
  }

  .total-price {
    margin: 0px 0px 20px;
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.bold};

    text-align: center;
  }
`;

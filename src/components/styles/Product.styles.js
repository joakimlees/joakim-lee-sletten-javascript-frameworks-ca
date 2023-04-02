import styled from "styled-components";

export const Product = styled.main`
  flex-grow: 1;

  h1,
  h2 {
    font-family: ${({ theme }) => theme.font.family.headings};
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.font.size.xLarge};
    text-align: center;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.large};
  }

  article {
    font-size: ${({ theme }) => theme.font.family.paragraphs};
  }

  .product-content-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

    .button-wrapper {
      display: flex;
      width: 100%;
      gap: 5px;

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

    .product-info-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      min-width: 300px;
    }

    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;

      img {
        width: 100%;
        height: 100%;
        min-width: 300px;
        object-fit: cover;
      }
    }
  }
`;

import styled from "styled-components";

export const NavHeader = styled.header`
  text-align: center;
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.font.size.medium};

  nav {
    flex-grow: 1;

    ul {
      display: flex;
      justify-content: space-evenly;
      padding: 20px 0px;
      margin: 0px;
      list-style: none;
      color: ${({ theme }) => theme.color.lightgreen};
      font-family: ${({ theme }) => theme.font.family.paragraphs};
      font-weight: ${({ theme }) => theme.font.weight.semiBold};

      li {
        margin: 0px 20px;

        a {
          color: ${({ theme }) => theme.color.lightgreen};
          text-decoration: none;
          :hover {
            color: red;
          }
        }
      }
    }
  }

  .cart-container {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.lightgreen};

    .cart-icon-wrapper {
      width: 40px;
    }
  }

  @media (max-width: ${({ theme }) => theme.screen.small}) {
    font-size: ${({ theme }) => theme.font.size.small};

    .cart-container .cart-icon-wrapper {
      width: 30px;
    }
  }
`;

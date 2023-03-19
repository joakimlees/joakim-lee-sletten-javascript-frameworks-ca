import styled from "styled-components";

export const NavHeader = styled.header`
  text-align: center;
  background-color: ${props => props.theme.color.dark};
  color: ${props => props.theme.color.light};
  font-size: ${props => props.theme.font.size.medium};

  nav {
    flex-grow: 1;

    ul {
      display: flex;
      justify-content: space-evenly;
      padding: 20px 0px;
      margin: 0px;
      list-style: none;
      color: ${props => props.theme.color.lightgreen};
      font-family: ${props => props.theme.font.family.paragraphs};
      font-weight: ${props => props.theme.font.weight.semiBold};

      li {
        margin: 0px 20px;

        a {
          color: ${props => props.theme.color.lightgreen};
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
    color: ${props => props.theme.color.lightgreen};

    .cart-icon-wrapper {
      width: 40px;
    }
  }

  @media (max-width: ${props => props.theme.screen.small}) {
    font-size: ${props => props.theme.font.size.small};

    .cart-container .cart-icon-wrapper {
      width: 30px;
    }
  }
`;

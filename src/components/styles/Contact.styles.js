import styled from "styled-components";

export const Contact = styled.main`
  flex-grow: 1;

  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.font.family.headings};
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.xLarge};
  }

  .contact-page-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    font-family: ${({ theme }) => theme.font.family.buttons};
    border-radius: 5px;
    width: 100%;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.yellow};
    border: solid;
    color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-top: 5px;

    :hover {
      background-color: ${({ theme }) => theme.color.primary};
      border-color: ${({ theme }) => theme.color.primary};
      color: white;
    }

    :active {
      background-color: white;
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

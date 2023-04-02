import styled from "styled-components";

export const Products = styled.main`
  flex-grow: 1;

  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.font.family.headings};
  }

  form {
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.font.family.paragraphs};
    max-width: 600px;
    margin: 50px auto;

    fieldset {
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        width: 100%;
        font-size: ${({ theme }) => theme.font.size.medium};
        border-radius: 5px;
      }
    }
  }

  h1,
  h2 {
    text-align: center;
  }

  ul {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px;
    list-style: none;
  }

  .no-searchMatch-heading {
    text-align: center;
    color: ${({ theme }) => theme.color.red};
  }
`;

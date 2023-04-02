import styled from "styled-components";

export const Products = styled.main`
  flex-grow: 1;

  form {
    max-width: 600px;
    margin: 50px auto;

    fieldset {
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        width: 100%;
      }
    }
  }

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
    color: red;
  }
`;

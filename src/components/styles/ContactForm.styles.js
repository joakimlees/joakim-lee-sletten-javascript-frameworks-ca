import styled from "styled-components";

export const ContactForm = styled.form`
  max-width: 500px;
  width: 100%;

  .error {
    color: red;
  }

  .success {
    background-color: black;
    text-align: center;
    color: lightgreen;
  }

  .hide {
    display: none;
  }

  .field-wrapper {
    display: flex;
    flex-direction: column;
  }
`;

import styled from "styled-components";

export const ContactForm = styled.form`
  max-width: 500px;
  width: 100%;

  label,
  input,
  textarea {
    font-family: ${({ theme }) => theme.font.family.paragraphs};
    font-size: ${({ theme }) => theme.font.family.medium};
    border-radius: 5px;
  }

  .error {
    color: ${({ theme }) => theme.color.red};
  }

  .success {
    padding: 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.green};
    text-align: center;
    color: ${({ theme }) => theme.color.primary};
  }

  .hide {
    display: none;
  }

  .field-wrapper {
    display: flex;
    flex-direction: column;
  }
`;

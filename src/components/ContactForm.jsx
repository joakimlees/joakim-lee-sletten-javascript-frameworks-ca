import * as Styled from "./styles/index";
import { useForm } from "../hooks/useForm";

export function ContactForm() {
  const { onFormSubmit, onNameChange, onEmailChange, onMessageChange, isError, isValid, name, message } = useForm();

  return (
    <Styled.ContactForm onSubmit={onFormSubmit}>
      <div className="field-wrapper">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={onNameChange} />
        {isError && name.length <= 0 ? <div>Error message</div> : ""}
        {isValid ? <div>Success Message message</div> : ""}
      </div>
      <div className="field-wrapper">
        <label htmlFor="email">email:</label>
        <input type="email" name="email" onChange={onEmailChange} />
      </div>
      <div className="field-wrapper">
        <label htmlFor="message">Message: </label>
        <textarea name="message" cols="30" rows="10" onChange={onMessageChange}></textarea>
        {isError && message.length <= 0 ? <div>Error message</div> : ""}
        {isValid ? <div>Success Message message</div> : ""}
      </div>
      <button>Send</button>
    </Styled.ContactForm>
  );
}

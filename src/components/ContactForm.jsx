import * as Styled from "./styles/index";
import { useForm } from "../hooks/useForm";

export function ContactForm() {
  const { name, email, message, onFormSubmit, onNameChange, onEmailChange, onMessageChange, isNameError, isEmailError, isMessageError, isFormError } = useForm();

  return (
    <Styled.ContactForm onSubmit={onFormSubmit}>
      <div className={isFormError ? "success" : "hide"}>You message was submitted</div>
      <div className="field-wrapper">
        <label htmlFor="name">Name:</label>
        <input placeholder="Enter your name here..." type="text" name="name" onChange={onNameChange} />
        <div className={!isNameError || name == 0 ? "hide" : "error"}>Name must be atleast 3 characters</div>
      </div>
      <div className="field-wrapper">
        <label htmlFor="email">email:</label>
        <input placeholder="Enter your email address here..." type="email" name="email" onChange={onEmailChange} />
        <div className={!isEmailError || email == 0 ? "hide" : "error"}>Please enter a valid email address</div>
      </div>
      <div className="field-wrapper">
        <label htmlFor="message">Message: </label>
        <textarea name="message" cols="30" rows="10" placeholder="Provide your message here..." onChange={onMessageChange}></textarea>
        <div className={!isMessageError || email == 0 ? "hide" : "error"}>Message must be at least 15 characters</div>
      </div>
      <button>Send</button>
    </Styled.ContactForm>
  );
}

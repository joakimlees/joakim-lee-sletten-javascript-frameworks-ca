import { useState } from "react";

//Hook which is used to validate a form.
//uses states to set states for input values and errors(if they occure, is true)
export function useForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isMessageError, setIsMessageError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  function onFormSubmit(event) {
    event.preventDefault();

    if (name.length > 2) {
      setIsNameError(false);
    } else {
      setIsNameError(true);
    }

    if (email.match(/\S+@\S+\.\S+/)) {
      setIsEmailError(false);
    } else {
      setIsEmailError(true);
    }

    if (message.length > 14) {
      setIsMessageError(false);
    } else {
      setIsMessageError(true);
    }

    if (name.length > 2 && email.match(/\S+@\S+\.\S+/) && message.length > 14) {
      setIsFormValid(true);

      const body = {
        name,
        email,
        message,
      };

      console.log(body);
    } else {
      setIsFormValid(false);
    }
  }

  function onNameChange(event) {
    setName(event.target.value);
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onMessageChange(event) {
    setMessage(event.target.value);
  }

  return { name, email, message, onFormSubmit, onNameChange, onEmailChange, onMessageChange, isNameError, isEmailError, isMessageError, isFormValid };
}

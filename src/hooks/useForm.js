import { useState } from "react";

export function useForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  function onFormSubmit(event) {
    event.preventDefault();

    if (name.length > 3) {
      setIsError(false);
      setIsValid(true);

      /*

       const body = {
        name,
        email,
        message,
      };

    fetch("#", {
      method: "POST",
      body: JSON.stringify(body),
    });
    */
    } else {
      setIsError(true);
      setIsValid(false);
    }

    if (message.length > 5) {
      setIsValid(true);
      setIsError(false);
    } else {
      setIsError(true);
      setIsValid(false);
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

  return { onFormSubmit, onNameChange, onEmailChange, onMessageChange, isError, isValid, name, message };
}

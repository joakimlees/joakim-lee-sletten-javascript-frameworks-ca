import { useState } from "react";

export function useForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  function onFormSubmit(event) {
    event.preventDefault();

    const body = {
      name,
      email,
      message,
    };
    console.log(body);
    /*
    fetch("#", {
      method: "POST",
      body: JSON.stringify(body),
    });
    */
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

  return { onFormSubmit, onNameChange, onEmailChange, onMessageChange };
}

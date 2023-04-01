import * as Styled from "./styles/index";
import { useState } from "react";

export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <Styled.ContactForm>
      <div className="field-wrapper">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </div>
      <div className="field-wrapper">
        <label htmlFor="email">email: </label>
        <input type="email" id="email" />
      </div>
      <div className="field-wrapper">
        <label htmlFor="subject">Subject: </label>
        <input type="text" id="subject" />
      </div>
      <div className="field-wrapper">
        <label htmlFor="message">Message: </label>
        <textarea name="" id="message" cols="30" rows="10"></textarea>
      </div>
    </Styled.ContactForm>
  );
}

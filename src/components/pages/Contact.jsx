import * as Styled from "../styles/index";
import { ContactForm } from "../ContactForm";

export function Contact() {
  return (
    <Styled.Contact>
      <Styled.BaseContainer>
        <div className="contact-page-wrapper">
          <h1>Contact page</h1>
          <h2>Contact us</h2>
          <ContactForm />
        </div>
      </Styled.BaseContainer>
    </Styled.Contact>
  );
}

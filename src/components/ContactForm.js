import React from "react";
import "../styles/ContactForm.css";
import { useTheme } from "../context/ThemeProvider";

const ContactForm = () => {
  const { theme } = useTheme();
  return (
    <form className="contact-form">
      <input
        className={`input-field | ${
          theme === "light" && "form-light"
        } bg-accent fs-secondary-body fw-regular text-footer`}
        type="text"
        placeholder="NAME"
      />
      <input
        className={`input-field | ${
          theme === "light" && "form-light"
        } bg-accent fs-secondary-body fw-regular text-footer`}
        type="email"
        placeholder="EMAIL"
      />
      <textarea
        className={`input-field | ${
          theme === "light" && "form-light"
        } bg-accent fs-secondary-body fw-regular text-footer`}
        placeholder="MESSAGE"
      />
      <button className="submit-btn |  uppercase btn inverted" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

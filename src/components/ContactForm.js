import React from "react";

const ContactForm = () => {
  return (
    <form>
      <input
        className="fs-secondary-body fw-regular text-footer"
        type="text"
        placeholder="NAME"
      />
      <input
        className="fs-secondary-body fw-regular text-footer"
        type="email"
        placeholder="EMAIL"
      />
      <textarea
        className="fs-secondary-body fw-regular text-footer"
        placeholder="MESSAGE"
      />
      <button className="uppercase btn inverted" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

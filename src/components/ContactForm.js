import React from "react";

const ContactForm = () => {
  return (
    <form>
      <input type="text" placeholder="NAME" />
      <input type="email" placeholder="EMAIL" />
      <textarea placeholder="MESSAGE" />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;

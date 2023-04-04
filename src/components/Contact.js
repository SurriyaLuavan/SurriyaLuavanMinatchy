import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <p>Get in touch</p>
      <h2>Contact</h2>
      <ContactForm />
      <article
        style={{
          maxWidth: "100%",
          overflow: "hidden",
          color: "red",
          width: 500,
          height: 500,
          borderRadius: "5px",
        }}
      >
        <div
          id="google-maps-canvas"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            title="location"
            style={{ height: "100%", width: "100%", border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=519+York+Street,+Fredericton,+NB,+Canada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
      </article>
      <article>
        <h3>Phone</h3>
        <p>+1 (250) 884-2465</p>
      </article>
      <article>
        <h3>Email</h3>
        <p>surriyaluavan@gmail.com</p>
      </article>
    </section>
  );
};

export default Contact;

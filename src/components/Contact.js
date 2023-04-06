import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="Contact" className="bg-accent | padding-inline">
      <p className="uppercase fs-secondary-subheading fw-semi-bold text-footer">
        Get in touch
      </p>
      <h2 className="fs-secondary-heading fw-bold text-footer">Contact</h2>
      <ContactForm />
      <article
        style={{
          maxWidth: "100%",
          overflow: "hidden",
          color: "red",
          width: 300,
          height: 300,
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
        <h3 className="fs-primary-body fw-bold text-footer">Phone</h3>
        <p className="text-footer fw-semi-bold ">+1 (250) 884-2465</p>
      </article>
      <article>
        <h3 className="fs-primary-body fw-bold text-footer">Email</h3>
        <p className="text-footer fw-semi-bold ">surriyaluavan@gmail.com</p>
      </article>
    </section>
  );
};

export default Contact;

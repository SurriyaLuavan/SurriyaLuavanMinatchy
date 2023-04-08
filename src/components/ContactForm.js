import React from "react";
import { useState } from "react";
import "../styles/ContactForm.css";
import { useTheme } from "../context/ThemeProvider";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const { theme } = useTheme();

  const [focus, setFocus] = useState({
    name: true,
    email: true,
    message: true,
  });

  function resetFocus() {
    Object.keys(focus).forEach((item) => {
      setFocus((prev) => {
        return { ...prev, [item]: false };
      });
    });
  }

  function handleSubmit(values) {
    resetFocus();
    formik.handleSubmit(values);
  }

  function handleFocus(e) {
    setFocus((prev) => {
      return { ...prev, [e.target.name]: true };
    });
  }

  function handleBlur(e) {
    setFocus((prev) => {
      return { ...prev, [e.target.name]: false };
    });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required").min(8, "Min. 8 characters"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.handleReset();
    },
  });

  return (
    <form className=" contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlfor="name" className="label-container">
        <input
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`input-field ${theme === "light" && "form-light"} ${
            formik.errors.name && !focus.name && "error-color"
          } bg-accent fs-secondary-body fw-regular text-footer`}
          type="text"
          placeholder="NAME"
        />
        {formik.errors.name && !focus.name ? (
          <p className="error-message fw-semi-bold">{formik.errors.name}</p>
        ) : null}
      </label>
      {/* <input
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`input-field | ${theme === "light" && "form-light"} ${
            formik.errors.name && !focus.name && "error-message"
          } bg-accent fs-secondary-body fw-regular text-footer`}
          type="text"
          placeholder="NAME"
        />
        {formik.errors.name && !focus.name ? (
          <div className="error-message">{formik.errors.name}</div>
        ) : null} */}

      <label htmlfor="email" className="label-container">
        <input
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`input-field | ${theme === "light" && "form-light"} ${
            formik.errors.email && !focus.email && "error-color"
          } | bg-accent fs-secondary-body fw-regular text-footer`}
          type="email"
          placeholder="EMAIL"
        />
        {formik.errors.email && !focus.email ? (
          <p className="error-message fw-semi-bold">{formik.errors.email}</p>
        ) : null}
      </label>
      <label htmlfor="email" className="label-container">
        <textarea
          id="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`input-field | ${theme === "light" && "form-light"} ${
            formik.errors.message && !focus.message && "error-color"
          } bg-accent fs-secondary-body fw-regular text-footer`}
          placeholder="MESSAGE"
        />
        {formik.errors.message && !focus.message ? (
          <p className="error-message error-textarea fw-semi-bold">
            {formik.errors.message}
          </p>
        ) : null}
      </label>
      <button className="submit-btn |  uppercase btn inverted" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

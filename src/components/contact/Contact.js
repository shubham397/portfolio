import React, { useState } from "react";

import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({});
  const [showError, setShowError] = useState(false);

  function handleOnChange(e) {
    setShowError(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function sendEmail(e) {
    e.preventDefault();
    if (
      formData.name &&
      formData.subject &&
      formData.message &&
      formData.email
    ) {
      const emailAddress = "shubhamkumar397@gmail.com";
      const subject = formData.subject;
      const body = `${formData.message} \n\nBest regards,\n${formData.name}`;
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, "_blank");
    } else {
      setShowError(true);
    }
  }

  return (
    <>
      <h1 className="heading">Contact Me</h1>
      <p className="sub-text">
        Thank you for your interest in getting in touch with me! Whether you
        have a question, a project proposal, or just want to say hello, I'm
        always happy to connect with fellow developers, clients, and
        collaborators.
      </p>
      <p className="sub-text">
        Feel free to reach out to me via email or through the contact form
        below.
      </p>
      <br />
      <form>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleOnChange}
          required
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleOnChange}
          required
        />
        <label for="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          onChange={handleOnChange}
          required
        />
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          onChange={handleOnChange}
          required
        ></textarea>
        {showError && (
          <label style={{ color: "red" }}>Every field is Required</label>
        )}
        <br />
        <br />
        <input type="submit" value="Submit" onClick={sendEmail} />
      </form>
    </>
  );
}

export default Contact;

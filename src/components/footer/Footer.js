import React from "react";

import { FcIphone, FcInvite, FcCalendar, FcDownload } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";

import "./footer.css";

function Footer() {
  function renderPhoto() {
    return (
      <div className="photo-div">
        <img className="photo-img" />
        <h2 className="photo-name">Shubham Kumar</h2>
        <div className="photo-description-div">
          <h5 className="photo-description">
            Senior Full Stack JavaScript Developer
          </h5>
        </div>
      </div>
    );
  }

  function renderSocialButtons() {
    return (
      <div className="social-buttons-container">
        <div
          className="social-buttons-items"
          onClick={() => {
            window.open(
              `https://www.linkedin.com/in/shubham-kumar-992826b4/`,
              "_blank"
            );
          }}
        >
          <img
            className="social-buttons-item"
            src={`/icons/linkedin.svg`}
            alt="linkedIn"
          />
        </div>
        <div
          className="social-buttons-items"
          onClick={() => {
            window.open(`https://github.com/shubham397`, "_blank");
          }}
        >
          <img
            className="social-buttons-item"
            src={`/icons/github.svg`}
            alt="linkedIn"
          />
        </div>
        <div
          className="social-buttons-items"
          onClick={() => {
            window.open(
              `https://auth.geeksforgeeks.org/user/shubham%20kumar%2039`,
              "_blank"
            );
          }}
        >
          <img
            className="social-buttons-item"
            src={`/icons/gfg.svg`}
            alt="linkedIn"
          />
        </div>

        <div
          className="social-buttons-items"
          onClick={() => {
            const emailAddress = "shubhamkumar397@gmail.com";
            const subject = "Contacting for job opportunity";
            const body = `Hello,
I visited your portfolio website and I'm reaching out to connect with you. I'm interested in discussing job opportunities. 
Please let me know if you're available for a conversation. I'd love to learn more about your work and explore how we might be able to collaborate.
            
Looking forward to hearing from you soon.
Best regards,
[Sender's Name]`;
            const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink, "_blank");
          }}
        >
          <img
            className="social-buttons-item"
            src={`/icons/mail.svg`}
            alt="linkedIn"
          />
        </div>

        <div
          className="social-buttons-items"
          onClick={() => {
            const phoneNumber = "8348872795";
            const message = encodeURIComponent(
              "Hello, I visited your portfolio website and I'm interested in connecting with you. Could you please get back to me when you have a moment? I'd love to discuss job opportunities."
            );
            const whatsAppLink = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsAppLink, "_blank");
          }}
        >
          <img
            className="social-buttons-item"
            src={`/icons/whatsapp.svg`}
            alt="linkedIn"
          />
        </div>
      </div>
    );
  }

  function renderContacts() {
    return (
      <div className="contact">
        <div className="contact-item">
          <div style={{ color: "#E93B81", fontSize: 22 }} className="icon">
            <FcIphone />
          </div>
          <div className="text">
            <span>Phone</span>
            <p className="item">+91 83488 72795</p>
          </div>
        </div>
        <hr />
        <div className="contact-item" style={{ paddingRight: "10px" }}>
          <div style={{ color: "#6AB5B9", fontSize: 22 }} className="icon">
            <FcInvite />
          </div>
          <div className="text">
            <span>Email</span>
            <p className="item">shubhamkumar397@gmail.com</p>
          </div>
        </div>
        <hr />
        <div className="contact-item">
          <div style={{ color: "#FD7590", fontSize: 22 }} className="icon">
            <FaLocationDot />
          </div>
          <div className="text">
            <span>Location</span>
            <p className="item">Bengaluru, India</p>
          </div>
        </div>
        <hr />
        <div className="contact-item">
          <div style={{ color: "#C17CEB", fontSize: 22 }} className="icon">
            <FcCalendar />
          </div>
          <div className="text">
            <span>Birthday</span>
            <p className="item">March 12, 1996</p>
          </div>
        </div>
      </div>
    );
  }

  function renderDownloadCV() {
    return (
      <div
        className="download-card"
        onClick={() => {
          const pdfUrl =
            "https://drive.google.com/uc?export=download&id=1R_XnGr5UAMUzCzFmg8vpEFMLYyEqgDZW";

          const link = document.createElement("a");
          link.href = pdfUrl;
          link.setAttribute("download", "Resume.pdf");

          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
        }}
      >
        <FcDownload className="download-icon" />
        <label>Download CV</label>
      </div>
    );
  }

  return (
    <>
      <div className="footer-div">
        {renderPhoto()}
        {renderSocialButtons()}
        {renderContacts()}
        {renderDownloadCV()}
      </div>
    </>
  );
}

export default Footer;

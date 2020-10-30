import React, { useState } from "react";
import envelopImg from "../assets/img/img-01.png";
import "./css/Contact.css";
import emailjs from "emailjs-com";

const sendMail = (e) => {
  e.preventDefault();
  const btn = document.getElementById("form-submit-btn");
  btn.value = "Sending...";
  btn.classList.remove("btn-primary");
  btn.classList.add("btn-danger");

  emailjs
    .sendForm(
      "service_form_id",
      "template_sz7kmmr",
      e.target,
      "user_GUTHW21Ig0p3EoKMMxpKb"
    )
    .then((result) => {
      console.log(result.text);
      btn.value = "Message Sended";
      btn.classList.remove("btn-danger");
      btn.classList.add("btn-success");
      setTimeout(() => {
        btn.value = "Send Message";
        btn.classList.remove("btn-success");
        btn.classList.add("btn-primary");
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
      btn.value = "Error: " + error.text + " Try again later!!";
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-danger");
      setTimeout(() => {
        btn.value = "Send Message";
        btn.classList.remove("btn-danger");
        btn.classList.add("btn-primary");
      }, 4000);
    });
};
const validateEmail = (email) => {
  const expression = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;

  return expression.test(String(email).toLowerCase());
};
function validateForm(v) {
  switch (v.target.name) {
    case "name":
      if (v.target.value.length < 4) {
        v.target.classList.add("is-invalid");
        v.target.classList.remove("is-valid");
      } else {
        v.target.classList.remove("is-invalid");
        v.target.classList.add("is-valid");
      }
      break;
    case "email":
      if (!validateEmail(v.target.value)) {
        v.target.classList.add("is-invalid");
        v.target.classList.remove("is-valid");
      } else {
        v.target.classList.remove("is-invalid");
        v.target.classList.add("is-valid");
      }
      break;
    case "subject":
      if (v.target.value.length < 10) {
        v.target.classList.add("is-invalid");
        v.target.classList.remove("is-valid");
      } else {
        v.target.classList.remove("is-invalid");
        v.target.classList.add("is-valid");
      }
      break;
    case "message":
      if (v.target.value.length < 15) {
        v.target.classList.add("is-invalid");
        v.target.classList.remove("is-valid");
      } else {
        v.target.classList.remove("is-invalid");
        v.target.classList.add("is-valid");
      }
      break;
    default:
      break;
  }
  // v.target.classList.add("is-valid");
}
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();

    if (
      validateEmail(email) &&
      name.length > 3 &&
      subject.length > 10 &&
      message.length > 15
    ) {
      sendMail(e);
    } else {
      const btn = document.getElementById("form-submit-btn");
      btn.value = "Invalid Inputs!!";
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-danger");
      setTimeout(() => {
        btn.value = "Send Message";
        btn.classList.remove("btn-danger");
        btn.classList.add("btn-primary");
      }, 2000);
    }
  };

  return (
    <div className="contact__form">
      <form onSubmit={formSubmit}>
        <div className="m-3">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            formNoValidate
            onChange={(v) => {
              validateForm(v);
              setname(v.target.value);
            }}
            className="form-control "
            placeholder="Full Name*"
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="m-3">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(v) => {
              validateForm(v);
              setEmail(v.target.value);
            }}
            className="form-control"
            placeholder="eg. example@mail.com*"
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Enter valid email</div>
        </div>
        <div className="m-3">
          <input
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={(v) => {
              validateForm(v);
              setsubject(v.target.value);
            }}
            className="form-control"
            placeholder="Subject*"
          />
        </div>
        <div className="m-3">
          <textarea
            name="message"
            id="message"
            rows="5"
            value={message}
            onChange={(v) => {
              validateForm(v);
              setmessage(v.target.value);
            }}
            className="form-control"
            placeholder="Enter Your Message*"
          ></textarea>
        </div>
        <div className="m-3">
          <input
            className="btn btn-primary form-control"
            type="submit"
            value="Send Message"
            id="form-submit-btn"
          />
        </div>
      </form>
    </div>
  );
};

function Contact() {
  return (
    <div>
      <section id="contact">
        <div className="container contact__wrapper">
          <div className="row d-flex justify-center">
            <div className="col-lg-6 d-flex justify-center">
              <img className=" img-fluid " src={envelopImg} alt="Envelop" />
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bookieslist",
        "template_contact",
        e.target,
        "J6u8Ve30HbzdDZmPG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const fadeInOut = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div
      style={{
        backgroundColor: "#141313",
      }}
    >
      <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          fontSize: "medium",
          width: "95vw",
          height: "94vh",
        }}
        onSubmit={sendEmail}
      >
        <h2>Deine Mitteilung an mich!</h2>

        <div style={{ width: "75vw" }}>
          <label> Email </label>
          <br />
          <input
            type="email"
            name="user_email"
            required
            style={{
              width: "100%",
              border: "none",
              borderRadius: "10px",
              padding: "2vw",
              height: "5vh",
              margin: "2% 0",
            }}
          />
          <br />
        </div>

        <div style={{ width: "75vw" }}>
          <label> Name </label>
          <br />
          <input
            type="text"
            name="user_name"
            required
            style={{
              width: "100%",
              border: "none",
              borderRadius: "10px",
              padding: "2vw",
              height: "5vh",
              margin: "2% 0",
            }}
          />
        </div>

        <div style={{ width: "75vw" }}>
          <label> Betreff </label>
          <br />
          <input
            type="text"
            name="tag"
            required
            style={{
              width: "100%",
              border: "none",
              borderRadius: "10px",
              padding: "2vw",
              height: "5vh",
              margin: "2% 0",
            }}
          />
        </div>

        <div style={{ width: "75vw" }}>
          <label> Message </label>
          <br />
          <textarea
            name="message"
            required
            style={{
              width: "100%",
              border: "none",
              borderRadius: "10px",
              padding: "2vw",
              height: "10vh",
              margin: "2% 0",
            }}
          />
          <br />
        </div>
        <div>
          <input
            type="submit"
            value="Abschicken"
            style={{
              backgroundColor: "transparent",
              color: "white",
              margin: "0.5vh",
              padding: "1vh",
              borderRadius: "10%",
              WebkitBoxShadow: "3px 4px 5px 2px rgba(0, 0, 0, 0.24)",
              boxShadow: "3px 4px 5px 2px rgba(0, 0, 0, 0.24)",
            }}
          />
        </div>
        <AnimatePresence>
          {isEmailSent && (
            <motion.p
              key="sent"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeInOut}
              transition={{ duration: 2 }}
            >
              Nachricht erfolgreich gesendet!
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ContactForm;

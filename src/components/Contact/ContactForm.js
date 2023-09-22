import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

const ContactForm = ({ initialEmail }) => {
  const [email, setEmail] = useState(initialEmail || '');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayModalOpen, setIsOverlayModalOpen] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setEmailError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail)) {
      setEmailError('Bitte geben Sie eine gültige E-Mail-Adresse ein');
    }
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
    setSubjectError('');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError('');
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError('');
  };

  const handleSubmit = () => {
    let hasErrors = false;

    if (!email) {
      setEmailError('Bitte geben Sie Ihre E-Mail-Adresse ein');
      hasErrors = true;
    }

    if (!subject) {
      setSubjectError('Bitte geben Sie einen Betreff ein');
      hasErrors = true;
    }

    if (!name) {
      setNameError('Bitte geben Sie Ihren Namen ein');
      hasErrors = true;
    }

    if (!message) {
      setMessageError('Bitte geben Sie Ihre Nachricht ein');
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    const templateParams = {
      to_email: email,
      subject,
      from_name: name,
      message,
    };

    emailjs
      .send('service_dxdcuft', 'template_71i5h38', templateParams, '9B5cuouAeSD6WAoCF')
      .then((response) => {
        console.log('E-Mail erfolgreich gesendet:', response);
        setIsModalOpen(true);
        setIsOverlayModalOpen(true);
      })
      .catch((error) => {
        console.error('Fehler beim Senden der E-Mail:', error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsOverlayModalOpen(false);
    // Clear form fields
    setEmail('');
    setSubject('');
    setName('');
    setMessage('');
  };

  const overlayModalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999, // Higher zIndex to display above the main modal
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: '20px',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  };

  const formStyles = {
    marginLeft: "850px",
    marginTop: '10px',
    backgroundColor: 'rgba(135, 206, 235, 0.5)',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
    maxWidth: '1000px',
    color: 'white',
    textDecoration: 'none',
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
    marginLeft: "800px"
  };

  return (
    <motion.div
      style={formStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            id="email"
            required
            value={email}
            onChange={handleEmailChange}
            style={{
              color: 'white',
              fontFamily: '"Playfair Display", serif',
              marginBottom: '10px',
            }}
          />
          {emailError && (
            <p style={{ color: 'red', background: 'transparent', fontFamily: '"Playfair Display", serif' }}>
              {emailError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject">Betreff</label>
          <input
            type="text"
            id="subject"
            required
            value={subject}
            onChange={handleSubjectChange}
            style={{
              color: 'white',
              fontFamily: '"Playfair Display", serif',
              marginBottom: '10px',
            }}
          />
          {subjectError && (
            <p style={{ color: 'red', background: 'transparent' }}>
              {subjectError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={handleNameChange}
            style={{
              color: 'white',
              fontFamily: '"Playfair Display", serif',
              marginBottom: '10px',
            }}
          />
          {nameError && (
            <p style={{ color: 'red', background: 'transparent' }}>
              {nameError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message">Nachricht</label>
          <textarea
            id="message"
            required
            rows={4}
            value={message}
            onChange={handleMessageChange}
            style={{
              color: 'white',
              fontFamily: '"Playfair Display", serif',
              marginBottom: '10px',
            }}
          />
          {messageError && (
            <p style={{ color: 'red', background: 'transparent' }}>
              {messageError}
            </p>
          )}
        </div>

        <div style={buttonContainerStyles}>
          <button
            id="Button"
            onClick={handleSubmit}
            style={{
              backgroundColor: 'azure',
              color: '#2196F3',
              borderRadius: '20px',
              boxShadow: 'darkgrey',
              maxWidth: '150px',
            }}
          >
            Senden
          </button>
        </div>
      </form>

      {/* Overlay Modal */}
      <Modal
        isOpen={isOverlayModalOpen}
        onRequestClose={closeModal}
        style={overlayModalStyles}
      >
        {/* Main Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              backgroundColor: 'rgba(135, 206, 235, 0.5)',
              border: 'none',
              borderRadius: '20px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
              color: 'white',
              fontFamily: '"Playfair Display", serif',
            },
          }}
        >
          <div>
            <div style={{ color: '#00008B', fontStyle: 'italic' }}>
              E-Mail erfolgreich gesendet!
            </div>
            <div style={{ borderTop: 'none' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
                Ihre Email wurde erfolgreich gesendet.<br />
                Das Fenster kann nun geschlossen werden!
              </div>
            </div>
            <div>
              <button
                onClick={closeModal}
                style={{
                  backgroundColor: 'azure',
                  color: '#2196F3',
                  borderRadius: '20px',
                  boxShadow: 'darkgrey',
                  fontStyle: 'italic',
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                Schließen
              </button>
            </div>
          </div>
        </Modal>
      </Modal>
    </motion.div>
  );
};

export default ContactForm;

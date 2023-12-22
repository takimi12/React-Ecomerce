import React, { useState } from "react";
import styles from "./Form.module.scss";

const Popup = ({ content, onClose }) => (
    
  <div className={styles.popup}>
    <div className={styles.popupContent}>
      <p>{content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telephoneError, setTelephoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [surnameTouched, setSurnameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [telephoneTouched, setTelephoneTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [isOverlayVisible, setOverlayVisible] = useState(false);


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelephoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");

    if (onlyDigits.length <= 9) {
      setTelephone(onlyDigits);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleNameBlur = () => {
    if (name.length < 2) {
      setNameError("Imię musi zawierać przynajmniej dwie litery");
    } else {
      setNameError("");
    }
  };

  const handleSurnameBlur = () => {
    if (surname.length < 2) {
      setSurnameError("Nazwisko musi mieć przynajmniej dwie litery");
    } else {
      setSurnameError("");
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Email musi zawierać znak @");
    } else if (!email.includes("@")) {
      setEmailError("Niepoprawny adres email");
    } else {
      setEmailError("");
    }
  };

  const handleTelephoneBlur = () => {
    if (!telephone) {
      setTelephoneError("Pole nie może być puste");
    } else if (telephone.length < 9) {
      setTelephoneError("Numer telefonu musi składać się z co najmniej 9 cyfr");
    } else {
      setTelephoneError("");
    }
  };

  const handleMessageBlur = () => {
    if (!message) {
      setMessageError("Tekst musi mieć przynajmniej 10 znaków");
    } else {
      setMessageError("");
    }
  };

  const handleInputFocus = (inputName) => {
    switch (inputName) {
      case "name":
        setNameTouched(true);
        setNameError("");
        break;
      case "surname":
        setSurnameTouched(true);
        setSurnameError("");
        break;
      case "email":
        setEmailTouched(true);
        setEmailError("");
        break;
      case "telephone":
        setTelephoneTouched(true);
        setTelephoneError("");
        break;
      case "message":
        setMessageTouched(true);
        setMessageError("");
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    handleNameBlur();
    handleSurnameBlur();
    handleEmailBlur();
    handleTelephoneBlur();
    handleMessageBlur();
  
    if (!nameError && !surnameError && !emailError && !telephoneError && !messageError) {
      setPopupContent("Formularz przesłany poprawnie!");
      setPopupVisible(true);
  
      // Clear form data
      setName("");
      setSurname("");
      setEmail("");
      setTelephone("");
      setMessage("");
      setNameTouched(false);
      setSurnameTouched(false);
      setEmailTouched(false);
      setTelephoneTouched(false);
      setMessageTouched(false);
    }
  };

  return (
    <>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2 className="ContactFormHeading">Get in touch!</h2>
        <div className={styles.formgroup}>
          <div className={`${styles.inputWrapper} ${nameError ? "error" : ""}`}>
            <label className={`input-label body-small ${nameError ? "error" : ""}`} htmlFor="name">
              Name
            </label>
            <div className={`${styles.inputContainer} ${nameError ? "error" : ""}`}>
              <input
                className={`${styles.customInput} ${nameError ? "error" : ""}`}
                id="name"
                type="text"
                aria-invalid="false"
                value={name}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                onFocus={() => handleInputFocus("name")}
              />
            </div>
            <span style={{ color: "red" }}>{nameError}</span>
          </div>
          <div className={`${styles.inputWrapper} ${surnameError ? "error" : ""}`}>
            <label className={`input-label body-small ${surnameError ? "error" : ""}`} htmlFor="surname">
              Surname
            </label>
            <div className={`${styles.inputContainer} ${surnameError ? "error" : ""}`}>
              <input
                className={`${styles.customInput} ${surnameError ? "error" : ""}`}
                id="surname"
                type="text"
                aria-invalid="false"
                value={surname}
                onChange={handleSurnameChange}
                onBlur={handleSurnameBlur}
                onFocus={() => handleInputFocus("surname")}
              />
            </div>
            <span style={{ color: "red" }}>{surnameError}</span>
          </div>
        </div>
        <div className={styles.formgroup}>
          <div className={`${styles.inputWrapper} ${emailError ? "error" : ""}`}>
            <label className={`input-label body-small ${emailError ? "error" : ""}`} htmlFor="email">
              Email
            </label>
            <div className={`${styles.inputContainer} ${emailError ? "error" : ""}`}>
              <input
                className={`${styles.customInput} ${emailError ? "error" : ""}`}
                id="email"
                type="email"
                aria-invalid="false"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                onFocus={() => handleInputFocus("email")}
              />
            </div>
            <span style={{ color: "red" }}>{emailError}</span>
          </div>
          <div className={`${styles.inputWrapper} ${telephoneError ? "error" : ""}`}>
            <label className={`input-label body-small ${telephoneError ? "error" : ""}`} htmlFor="telephone">
              Subject
            </label>
            <div className={`${styles.inputContainer} ${telephoneError ? "error" : ""}`}>
              <input
                className={`${styles.customInput} ${telephoneError ? "error" : ""}`}
                id="telephone"
                type="tel"
                aria-invalid="false"
                value={telephone}
                onChange={handleTelephoneChange}
                onBlur={handleTelephoneBlur}
                onFocus={() => handleInputFocus("telephone")}
              />
            </div>
            <span style={{ color: "red" }}>{telephoneError}</span>
          </div>
        </div>
        <div className={`textarea-wrapper ${messageError ? "error" : ""}`}>
          <label className={`textarea-label body-small ${messageError ? "error" : ""}`} htmlFor="message">
            Wiadomość
          </label>
          <div className={`textarea-container ${messageError ? "error" : ""}`}>
            <textarea
              className={`${styles.textarea} ${messageError ? "error" : ""}`}
              id="message"
              aria-invalid="false"
              draggable="false"
              value={message}
              onChange={handleMessageChange}
              onBlur={handleMessageBlur}
              onFocus={() => handleInputFocus("message")}
            ></textarea>
          </div>
          <span style={{ color: "red" }}>{messageError}</span>
        </div>

        <div className={styles.submit}>
          <button className={` --btn ${styles.btn}`}>Send message</button>
        </div>
      </form>

      {isPopupVisible && (
  <>
    <div className={styles.overlay}></div>
    <Popup content={popupContent} onClose={() => { setPopupVisible(false); setOverlayVisible(false); }} />
  </>
)}
    </>
  );
};

export default ContactForm;

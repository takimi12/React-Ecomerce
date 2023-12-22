import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import styles from './HomeNewsletter.module.scss'; // Replace with your actual styles module


const Popup = ({ content, onClose }) => (
  <div className={styles.popup}>
    <div className={styles.popupContent}>
      <p>{content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const Newsletters = () => {
  const [state, handleSubmit] = useForm('meqyjrdw');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!email.includes('@')) {
      setEmailError('Email must contain @');
    } else {
      setEmailError('');
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!emailError) {
      setLoading(true);

      const formData = {
        email,
      };

      try {
        const response = await fetch('https://formspree.io/meqyjrdw', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setPopupContent('Form submitted successfully!');
          setEmail('');
        } else {
          console.error('Form submission failed. Please try again later.');
        }
      } catch (error) {
        console.error('An error occurred during form submission.', error);
      } finally {
        setLoading(false);
        setPopupVisible(true);
        setOverlayVisible(true);
      }
    }
  };

  return (
    <>
      <section className={styles.HomeNewsletter}>
        <div className="">
          <div className={styles.row}>
            <div className="column-5-12">
              <div className="form--left">
                <h3>Newsletter</h3>
                <p>Subscribe to get information about products and coupons</p>
              </div>
            </div>
            <form
              className={styles.contactForm}
              onSubmit={(e) => {
                handleSubmitForm(e);
              }}
            >
              <div className={styles.formgroup}>
                <div className={`${styles.inputWrapper} ${emailError ? 'error' : ''}`}>
                  <label className={`input-label body-small ${emailError ? 'error' : ''}`} htmlFor="email">
                    Email
                  </label>
                  <div className={`${styles.inputContainer} ${emailError ? 'error' : ''}`}>
                    <input
                      className={`${styles.customInput} ${emailError ? 'error' : ''}`}
                      id="email"
                      type="email"
                      aria-invalid="false"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailBlur}
                    />
                    <button className={` --btn ${styles.btn}`} type="submit" disabled={isLoading}>
                      {isLoading ? 'Sending...' : 'Send message'}
                    </button>
                  </div>
                  <span style={{ color: 'red' }}>{emailError}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {isPopupVisible && (
        <>
          {isOverlayVisible && <div className={styles.overlay}></div>}
          <Popup content={popupContent} onClose={() => { setPopupVisible(false); setOverlayVisible(false); }} />
        </>
      )}
    </>
  );
};

export default Newsletters;

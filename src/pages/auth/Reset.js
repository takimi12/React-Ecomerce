import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './auth.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';
import { Form, Field } from 'react-final-form'; // Dodaj import dla react-final-form

const Reset = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const resetPassword = async (values) => {
    setIsLoading(true);

    try {
      await sendPasswordResetEmail(auth, values.email);
      setIsLoading(false);
      toast.success("Check your email for a reset link");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Pole wymagane';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Niepoprawny adres email';
    }

    return errors;
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
     
        <Form
          onSubmit={resetPassword}
          validate={validate}
          render={({ handleSubmit }) => (
            <form className="form--account" onSubmit={handleSubmit}>
              <h4 className="TitleHeading">Reset Password</h4>
              <div className="panel" id="sign-in">
                <div className="content">
                  <h5 className="heading">Zresetuj swoje hasło</h5>

                  <Field name="email">
                    {({ input, meta }) => (
                      <div className="form-group">
                        <div className="form-item">
                          <div className="item-control">
                            <div className="item-control-input">
                              <div className="input-content-control">
                                <input
                                  className="input-content"
                                  {...input}
                                  type="text"
                                  placeholder="Give your email adress"
                                  required
                                />
                                <div className={styles.info}>
                                  {meta.dirty && meta.touched && !meta.valid && (
                                    <p className={styles.ErrorMessage}>{meta.error}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Field>

                  <div className="submitLogin">
                    <button type="submit" className="--btn --btn-primary --btn-button">
                      Reset Passwords
                    </button>
                  </div>

                  <div className="submitLogin"></div>
                  <div className={styles['Alt-reset']}>
                    <div>
                      <Link to="/Login">Login</Link>
                    </div>
                    <div className={styles['NewAccount']}>
                      <Link className={styles['NewAccountAnchor']} to="/register">
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        />
  
    </>
  );
};

export default Reset;

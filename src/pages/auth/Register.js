import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Form, Field } from 'react-final-form';
import styles from './auth.module.scss';

import Loader from '../../components/loader/Loader';









const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();




  const registerUser = async (values) => {
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // Aktualizacja pola displayName dla użytkownika
      await updateProfile(userCredential.user, { displayName: values.name });

      toast.success("Registration successful");
      setTimeout(() => {
        navigate("/login");
      }, 5000);

    } catch (error) {
      toast.error("Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Pole wymagane';
    } else if (values.name.length < 3) {
      errors.name = 'Imię musi mieć przynajmniej 3 litery';
    }

    if (!values.email) {
      errors.email = 'Pole wymagane';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Niepoprawny adres email';
    }

    if (!values.password) {
      errors.password = 'Pole wymagane';
    } else if (values.password.length < 6) {
      errors.password = 'Hasło musi mieć przynajmniej 6 znaków';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Pole wymagane';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Hasła nie są zgodne';
    }

    return errors;
  };

  return (
    <>

        {isLoading && <Loader />}
        <Form
          onSubmit={registerUser}
          validate={validate}
          render={({ handleSubmit }) => (
            <form className="form--account" onSubmit={handleSubmit}>
              <h4 className="TitleHeading">Register</h4>
              <div className="panel" id="sign-in">
                <div className="content">
                  <h5 className="heading">Register An Account</h5>

                  <Field name="email">
                    {({ input, meta }) => (
                      <div className="form-group">
                        <div className="form-item">
                          <div className="item-control">
                            <div className="item-control-input">
                              <div className="input-content-control">
                                <input
                                  className='input-content'
                                  {...input}
                                  type="text"
                                  placeholder="Email"
                                  onBlur={input.onBlur}
                                />
                                <div className={styles.info}>
                                  {meta.dirty && meta.touched && !meta.valid && <p className={styles.ErrorMessage}>{meta.error}</p>}
                                  {meta.dirty && meta.touched && meta.valid && <p className={styles.SuccessMessage}>Email poprawny!</p>}
                                  {!meta.dirty && meta.touched && !meta.valid && <p className={styles.ErrorMessage}>Pole wymagane</p>}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Field>

                  <Field
                    name="name"
                    validate={(value) => {
                      if (!value) {
                        return 'Pole wymagane';
                      } else if (value.length < 3) {
                        return 'Imię musi mieć przynajmniej 3 znaki';
                      }
                      return undefined;
                    }}
                  >
                    {({ input, meta }) => (
                      <div className="form-group">
                        <div className="form-item">
                          <div className="item-control">
                            <div className="item-control-input">
                              <div className="input-content-control">
                                <input
                                  className='input-content'
                                  {...input}
                                  type="text"
                                  placeholder="First Name"
                                  onBlur={input.onBlur}
                                />
                                <div className={styles.info}>
                                  {meta.dirty && meta.touched && !meta.valid && <p className={styles.ErrorMessage}>{meta.error}</p>}
                                  {meta.dirty && meta.touched && meta.valid && <p className={styles.SuccessMessage}>Imię poprawne!</p>}
                                  {!meta.dirty && meta.touched && !meta.valid && <p className={styles.ErrorMessage}>Pole wymagane</p>}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Field>

                  <Field
                    name="password"
                    validate={(value) => {
                      if (!value) {
                        return 'Pole wymagane';
                      } else if (value.length < 6) {
                        return 'Hasło musi mieć przynajmniej 6 znaków';
                      }
                      return undefined;
                    }}
                  >
                    {({ input, meta }) => (
                      <div className="form-group">
                        <div className="form-item">
                          <div className="item-control">
                            <div className="item-control-input">
                              <div className="input-content-control">
                                <input
                                  className='input-content'
                                  {...input}
                                  type="password"
                                  placeholder="Password"
                                  onBlur={input.onBlur}
                                />
                                <div className={styles.info}>
                                  {meta.dirty && meta.touched && !meta.valid && <p className={styles.ErrorMessage}>{meta.error}</p>}
                                  {meta.dirty && meta.touched && meta.valid && <p className={styles.SuccessMessage}>Hasło poprawne!</p>}
                                  {!meta.dirty && meta.touched && !meta.valid && <p className={styles.ErrorMessage}>Pole wymagane</p>}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Field>

                  <Field
                    name="confirmPassword"
                    validate={(value, values) => {
                      if (!value) {
                        return 'Pole wymagane';
                      } else if (value !== values.password) {
                        return 'Hasła nie są zgodne';
                      }
                      return undefined;
                    }}
                  >
                    {({ input, meta }) => (
                      <div className="form-group">
                        <div className="form-item">
                          <div className="item-control">
                            <div className="item-control-input">
                              <div className="input-content-control">
                                <input
                                  className='input-content'
                                  {...input}
                                  type="password"
                                  placeholder="Confirm Password"
                                  onBlur={input.onBlur}
                                />
                                <div className={styles.info}>
                                  {meta.dirty && meta.touched && !meta.valid && <p className={styles.ErrorMessage}>{meta.error}</p>}
                                  {meta.dirty && meta.touched && meta.valid && <p className={styles.SuccessMessage}>Hasła zgodne!</p>}
                                  {!meta.dirty && meta.touched && !meta.valid && <p className={styles.ErrorMessage}>Pole wymagane</p>}
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Field>

                  <div className="submitLogin">
                    <button
                      type="submit"
                      className="--btn --btn-primary --btn-button"
                    >
                      Register
                    </button>
                  </div>

                  <div className={styles['Alt-log']}>
                    <p>Already have an account? </p>
                    <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>
            </form>
          )}
        />

 
        </>
  );
};

export default Register;

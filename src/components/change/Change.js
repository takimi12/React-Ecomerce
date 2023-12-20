import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebase/config';
import { Form, Field } from 'react-final-form';
import styles from './Change.module.scss';
import Loader from '../loader/Loader';
import { updatePassword, updateEmail } from 'firebase/auth';

import { getAuth, reauthenticateWithCredential } from "firebase/auth";





const ChangePasswordEmail = () => {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
const user = auth.currentUser;


  const changePasswordEmail = async (values) => {
    setIsLoading(true);

    
    try {
      const user = auth.currentUser;

      if (values.newPassword) {
        await updatePassword(user, values.newPassword);
      }



      toast.success("Changes saved successfully");
      setTimeout(() => {
        navigate("/profile");
      }, 5000);
    } catch (error) {
      toast.error("Failed to save changes");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.currentPassword) {
      errors.currentPassword = 'Current password is required';
    }

    if (values.newPassword && values.newPassword.length < 6) {
      errors.newPassword = 'New password must be at least 6 characters';
    }

    if (values.confirmNewPassword !== values.newPassword) {
      errors.confirmNewPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form
        onSubmit={changePasswordEmail}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className="form--account" onSubmit={handleSubmit}>
            <h4 className="TitleHeading">Change Password and Email</h4>
            <div className="panel" id="change-password-email">
              <div className={styles.content}>
                <h5 className="heading">Change Your Password and Email</h5>

            

                <Field
                  name="newPassword"
                  validate={(value) => value && value.length < 6 ? 'New password must be at least 6 characters' : undefined}
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
                                placeholder="New Password"
                                onBlur={input.onBlur}
                              />
                              <div className={styles.info}>
                                {meta.dirty && meta.touched && !meta.valid && <p className={styles.ErrorMessage}>{meta.error}</p>}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Field>

                <Field
                  name="confirmNewPassword"
                  validate={(value, values) => value !== values.newPassword ? 'Passwords do not match' : undefined}
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
                                placeholder="Confirm New Password"
                                onBlur={input.onBlur}
                              />
                              <div className={styles.info}>
                                {meta.dirty && meta.touched && !meta.valid && <p className={styles.ErrorMessage}>{meta.error}</p>}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Field>

              

                <div className="submitChangePasswordEmail">
                  <button
                    type="submit"
                    className="--btn --btn-primary --btn-button"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </>
  );
};

export default ChangePasswordEmail;

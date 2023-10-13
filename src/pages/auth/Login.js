import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import styles from './auth.module.scss';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/config';
import { ToastContainer, toast } from 'react-toastify';
import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';
import { useDispatch } from 'react-redux'; 
import { SET_ACTIVE_USER } from '../../redux/slice/authslice'; 














const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login succesful..");

        dispatch(SET_ACTIVE_USER({
       
        }));



        navigate("/account");
      
      })
      .catch((error) => {
        setIsLoading(false);
        
        switch (error.code) {
          case "auth/user-not-found":
            toast.error("Nie znaleziono użytkownika o podanym adresie email.");
            break;
          case "auth/wrong-password":
            toast.error("Podane hasło jest nieprawidłowe.");
            break;
          // Dodaj więcej przypadków w zależności od rodzaju błędów
          default:
            toast.error("Wystąpił błąd: Podany adres e-mail nie istnieje "  );
        }
      });



  }

  //Login with Google
  const provider = new GoogleAuthProvider();
  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login Succesfully");
  
        // Przygotuj obiekt z danymi użytkownika, tak samo jak w przypadku logowania za pomocą e-mail i hasła
        const userData = {
          email: user.email,
          displayName: user.displayName || user.email.split('@')[0], // Wybierz część adresu e-mail do znaku "@"
          // Dodaj inne dane, jeśli są dostępne
        };
  
        // Wyślij dane użytkownika do Redux
        dispatch(SET_ACTIVE_USER(userData));
  
        navigate("/accounts");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  

  

        


  return (
    <>
       {isLoading && <Loader />}

      <Card>
        <form className="form--account" onSubmit={loginUser}>
          <h4 className="TitleHeading">Login</h4>
          <div className="panel" id="sign-in">
            <div className="content">
              <h5 className="heading">Log In Your Account</h5>
              <div className="form-group">
                <div className="form-item">
                  <div className="item-control">
                    <div className="item-control-input">
                      <div className="input-content-control">
                        <input
                           className="input-content"
                           type="text"
                           placeholder="Username or email address"
                           id="email"
                           name="email" 
                           required
                       
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />


                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-item">
                  <div className="item-control">
                    <div className="item-control-input">
                      <div className="input-content-control">
                        <input
                            className="input-content"
                            type="password"
                            placeholder="Password..."
                            id="password"
                            name="password"
                          value={password}
                          required
 
                          onChange={(e) =>setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="submitLogin">
                <button type="submit" className="--btn --btn-primary --btn-button">
                  Login
                </button>
              </div>

              <div className="submitLogin">
              <button type='submit' className={`--btn --btn-danger --btn-block ${styles.LoginGoogle}`}
              onClick={singInWithGoogle}>
                  <FaGoogle color='#fff'/>
                  Login With Google
                </button>


                </div>
                <div className={styles['Alt-log']}>
                  <div><Link to="/reset">Forgot Password?</Link></div>
                  <div className={styles['NewAccount']}>
                    <p>Don't have an account? </p> 
                    <Link className={styles['NewAccountAnchor']} to="/register">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          
        </form>
      </Card>
    </>
  );
};

export default Login;


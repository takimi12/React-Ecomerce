import React from 'react';
import { useSelector } from 'react-redux';
import { selectEmail, selectIsLoggedIn } from '../../redux/slice/authslice';
import { Link } from 'react-router-dom'; // Jeśli korzystasz z React Router, dodaj Link

const PrivateRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    // Zalogowany użytkownik, wyświetlamy treść
    return children;
  }

  // Użytkownik nie jest zalogowany, więc wyświetlamy komunikat i link do strony logowania
  return (
    <div>
      <p>Treść dostępna tylko dla zalogowanych użytkowników.</p>
      <p>Zaloguj się, aby uzyskać dostęp do treści.</p>
      <Link to="/login">Przejdź do strony logowania</Link>
    </div>
  );
};

export default PrivateRoute;

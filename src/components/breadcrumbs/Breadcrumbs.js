import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './BreadCrumbs.module.scss';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/slice/productslice';
import { useDispatch } from 'react-redux';

const Breadcrumbs = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  const products = useSelector(selectProducts);

  if (pathSegments.length === 0) {
    return null; // Jeśli jesteśmy na stronie Home, nie renderujemy breadcrumbs
  }

  // Przykładowe ID produktu
  const productIdToFind = pathSegments[1];

  const foundProduct = products.find(product => product.id === productIdToFind);

  let productName = ''; // Inicjalizuj zmienną productName poza blokiem warunkowym

  if (foundProduct) {
    productName = foundProduct.name; // Przypisz nazwę produktu, jeśli produkt został znaleziony
  }

  return (
    <div className={styles.breadcrumb}>
      <div className={styles.container}>
        <NavLink exact to="/" className={styles.NormalLink}>
          Home
        </NavLink>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={segment}>
            <span className={styles.space}>/</span>
            <NavLink
              className={styles.active}
            >
              {index === 1 && productName ? productName : segment}
            </NavLink>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;

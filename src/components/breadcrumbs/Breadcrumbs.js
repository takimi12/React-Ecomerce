import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './BreadCrumbs.module.scss';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  if (pathSegments.length === 0) {
    return null; // Jeśli jesteśmy na stronie Home, nie renderujemy breadcrumbs
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
              to={`/${pathSegments.slice(0, index + 1).join('/')}`}
              className={styles.active}
            >
              {segment}
            </NavLink>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;

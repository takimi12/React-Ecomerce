import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const NavigationDefault = () => {


    return (
        <>

        <nav className={styles.navigationMain}>

                <div className={styles.navigation}>
                    <Link to="/shop" className={styles.navigationLink}>
                        Shop
                    </Link>
                    <Link to="/About" className={styles.navigationLink}>
                        About us
                    </Link>
                    <Link to="/Contact" className={styles.navigationLink}>
                        Contact
                    </Link>
                    <Link to="/faq" className={styles.navigationLink}>
                       Faq
                    </Link>
                    <Link to="/blog" className={styles.navigationLink}>
                       Blog
                    </Link>
                 </div>
   
        </nav>

        </>
    );
};

export default NavigationDefault;

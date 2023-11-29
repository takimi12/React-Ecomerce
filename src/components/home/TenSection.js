import first from '../../assets/img/collection/home-1/ad-1.jpg';
import second from '../../assets/img/collection/home-1/ad-2.jpg';
import styles from './TenSection.module.scss';

const HomeAds = () => {



    return (
        <section className={styles.HomeTenthhSection}>
            <div className="ps-container">
                <div className={styles.row}>
                    <div className={styles.col_8}>
                    <a href='#' className="ps-collection">
                <img src={first} alt="martfury" />
            </a>
                    </div>
                    <div className={styles.col_4}>
                    <a href='#' className="ps-collection">
                <img src={second} alt="martfury" />
            </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeAds;

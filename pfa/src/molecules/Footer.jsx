import React from 'react';
import styles from '../css modules/Footer.module.css';
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div className={styles.footer}>
           <footer>
            <Link  className={styles.navItem} >FAQ</Link>
            <Link   className={styles.navItem}>Privacy Policy</Link>

           </footer>
        </div>
    );
}

export default Footer;

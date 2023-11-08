import React from 'react';
import styles from '../css modules/Footer.module.css';
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div className={styles.footer}>
           <footer>
            <Link >FAQ</Link>
            <Link >Privacy ppolicy</Link>

           </footer>
        </div>
    );
}

export default Footer;

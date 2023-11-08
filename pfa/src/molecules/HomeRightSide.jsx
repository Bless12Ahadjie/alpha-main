import React from 'react';
import styles from '../css modules/HomeRightSide.module.css';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

const HomeRightSide = () => {
    const container ={
        width: '515px',
        height: '195px',
        flexShrink: '0',

    }
    return (
        

        <div style={container}>
            <p className={styles.headTxt}>Empower your financial future with Alpha:</p>
            <p className={styles.btmTxt}>Seamlessly track, manage, and achieve  your financial goals with our intuitive and secure apps.</p>
            <Link to='/Sign-in'><Button className={styles.btn} btnName='Join us'/></Link>
            
        </div>
    );
}

export default HomeRightSide;

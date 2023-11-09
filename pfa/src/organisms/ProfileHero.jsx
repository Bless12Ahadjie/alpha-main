import React from 'react';
import styles from '../css modules/ProfileHero.module.css'
import FileUpload from '../atoms/FileUpload';
const ProfileHero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rule}></div>
            <div>
            <p className={styles.headerTxt}>Profile Info</p>
            <p className={styles.subTxt}>Tell Us a bit about yourself. This information allow us get to know how you spend better.</p>
            </div>
            <div className={styles.rule}></div>
            <FileUpload/>

        </div>
    );
}

export default ProfileHero;

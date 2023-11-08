import React from 'react';
import styles from '../css modules/Body.module.css';
import OverviewBox from '../organisms/OverviewBox';


const Body = () => {
    return (
        <div className={styles.container}>
           <OverviewBox />
        </div>
    );
}

export default Body;

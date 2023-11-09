import React from 'react';
import styles from '../css modules/Body.module.css';
import OverviewBox from '../organisms/OverviewBox';
import Header from './Header';
import Box2 from '../organisms/Box2';
import Box3 from '../organisms/Box3';


const Body = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.OverBox}>
            <OverviewBox />
            <Box2/>
            <Box3/>
            </div>

        </div>
    );
}

export default Body;

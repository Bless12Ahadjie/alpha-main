import React from 'react';
import styles from '../css modules/OvervieBox.module.css'
// import Header from '../molecules/Header';

const OverviewBox = ({style}) => {
    return (
        <div style={style} className={styles.Box}>
          <div style={style} className={styles.headBox}>
          <div className={styles.content}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
            <path d="M17.7266 7.89062L15.1915 1.64062C15.1356 1.50296 15.032 1.38934 14.8991 1.32008C14.7661 1.25081 14.6126 1.2304 14.4658 1.2625L9.5326 2.34375V0.625C9.5326 0.45924 9.46583 0.300269 9.34697 0.183058C9.22811 0.0658481 9.06691 0 8.89882 0C8.73073 0 8.56953 0.0658481 8.45067 0.183058C8.33181 0.300269 8.26504 0.45924 8.26504 0.625V2.62344L3.05695 3.76484C2.95653 3.78672 2.86302 3.83236 2.78449 3.89783C2.70596 3.96329 2.64476 4.04662 2.60617 4.14062V4.14531L0.071048 10.3906C0.0407209 10.4651 0.0253836 10.5447 0.0258911 10.625C0.0258911 12.4461 1.97001 13.125 3.19479 13.125C4.41958 13.125 6.3637 12.4461 6.3637 10.625C6.3642 10.5447 6.34887 10.4651 6.31854 10.3906L4.0599 4.82578L8.26504 3.90625V13.75H6.99748C6.82939 13.75 6.66818 13.8158 6.54933 13.9331C6.43047 14.0503 6.3637 14.2092 6.3637 14.375C6.3637 14.5408 6.43047 14.6997 6.54933 14.8169C6.66818 14.9342 6.82939 15 6.99748 15H10.8002C10.9683 15 11.1295 14.9342 11.2483 14.8169C11.3672 14.6997 11.4339 14.5408 11.4339 14.375C11.4339 14.2092 11.3672 14.0503 11.2483 13.9331C11.1295 13.8158 10.9683 13.75 10.8002 13.75H9.5326V3.62656L13.573 2.74219L11.4791 7.89062C11.4488 7.96512 11.4334 8.04473 11.4339 8.125C11.4339 9.94609 13.3781 10.625 14.6028 10.625C15.8276 10.625 17.7717 9.94609 17.7717 8.125C17.7723 8.04473 17.7569 7.96512 17.7266 7.89062ZM3.19479 11.875C2.59825 11.875 1.39169 11.593 1.299 10.7312L3.19479 6.05781L5.09059 10.7312C4.9979 11.593 3.79134 11.875 3.19479 11.875ZM14.6028 9.375C14.0063 9.375 12.7997 9.09297 12.7071 8.23125L14.6028 3.55781L16.4986 8.23125C16.406 9.09297 15.1994 9.375 14.6028 9.375Z" fill="black"/>
          </svg>
            <p className={styles.balance}>Balance</p>
          </div>
            

          </div>
          <p className={styles.innerTxt}>₵500.00</p>
        </div>
    );
}

export default OverviewBox;

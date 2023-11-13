import React from 'react';
import styles from '../css modules/Header.module.css';
import image from '../asset/Ellipse 1.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.hold}>
         <div className={styles.search}>
         <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path d="M25.7351 24.3201L19.4764 18.0626C21.2904 15.8848 22.195 13.0914 22.0019 10.2635C21.8089 7.43573 20.533 4.7912 18.4398 2.88009C16.3466 0.968989 13.5972 -0.0615536 10.7635 0.00284627C7.92984 0.0672461 5.23008 1.22163 3.22586 3.22586C1.22163 5.23008 0.0672461 7.92984 0.00284627 10.7635C-0.0615536 13.5972 0.968989 16.3466 2.88009 18.4398C4.7912 20.533 7.43573 21.8089 10.2635 22.0019C13.0914 22.195 15.8848 21.2904 18.0626 19.4764L24.3201 25.7351C24.413 25.828 24.5233 25.9017 24.6447 25.952C24.7661 26.0023 24.8962 26.0282 25.0276 26.0282C25.159 26.0282 25.2891 26.0023 25.4105 25.952C25.5319 25.9017 25.6422 25.828 25.7351 25.7351C25.828 25.6422 25.9017 25.5319 25.952 25.4105C26.0023 25.2891 26.0282 25.159 26.0282 25.0276C26.0282 24.8962 26.0023 24.7661 25.952 24.6447C25.9017 24.5233 25.828 24.413 25.7351 24.3201ZM2.02763 11.0276C2.02763 9.2476 2.55547 7.50754 3.5444 6.0275C4.53334 4.54745 5.93894 3.3939 7.58348 2.71271C9.22801 2.03152 11.0376 1.85329 12.7834 2.20056C14.5293 2.54783 16.1329 3.40499 17.3916 4.66367C18.6503 5.92234 19.5074 7.52599 19.8547 9.27182C20.202 11.0176 20.0237 12.8272 19.3425 14.4718C18.6614 16.1163 17.5078 17.5219 16.0278 18.5109C14.5477 19.4998 12.8077 20.0276 11.0276 20.0276C8.64149 20.025 6.35385 19.0759 4.66659 17.3887C2.97934 15.7014 2.03028 13.4138 2.02763 11.0276Z" fill="#C2C2C2"/>
        </svg>
        <input className={styles.srchField} type="text"  placeholder='search'/>
         </div>
        
  

        <Link to='/soon-to-come'>     
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
        <path d="M18.0282 17V18H0.0281982V17L2.0282 15V9C2.0282 5.9 4.0582 3.17 7.0282 2.29C7.0282 2.19 7.0282 2.1 7.0282 2C7.0282 1.46957 7.23891 0.960859 7.61399 0.585786C7.98906 0.210714 8.49777 0 9.0282 0C9.55863 0 10.0673 0.210714 10.4424 0.585786C10.8175 0.960859 11.0282 1.46957 11.0282 2C11.0282 2.1 11.0282 2.19 11.0282 2.29C13.9982 3.17 16.0282 5.9 16.0282 9V15L18.0282 17ZM11.0282 19C11.0282 19.5304 10.8175 20.0391 10.4424 20.4142C10.0673 20.7893 9.55863 21 9.0282 21C8.49777 21 7.98906 20.7893 7.61399 20.4142C7.23891 20.0391 7.0282 19.5304 7.0282 19" fill="#C2C2C2"/>
        </svg>
        </Link>

        </div>
        
        <div>
            {/* <img className={styles.profile} src={image} alt="" /> */}
            {/* <div className={styles.profile}>

            </div> */}
        </div>
       
    </div>
  )
}

export default Header;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css modules/LeftSignin.module.css';
import logo from '../asset/Group 28.svg';
import { Link , Navigate} from 'react-router-dom';

const LeftSignin = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    async function register(ev) {
      ev.preventDefault();
  
      const response = await fetch('http://localhost:4000/api/user/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, confirmPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      try {
        const responseData = await response.json();
        
        if (!response.ok) {
          if (responseData && responseData.message) {
            alert(`Registration failed: ${responseData.message}`);
          } else {
            alert('Registration failed: An unknown error occurred.');
          }
        } else {
          navigate('/sign-in');
        }
      } catch (error) {
        console.error('Error parsing server response:', error);
        alert('Registration failed: An unexpected error occurred.');
      }
    }
  
  


    return (
        <div className={styles.container}>

        <div className={styles.wrapper}>
            <img src={logo} alt="logo" />

            <div className={styles.TxtHolder}>
            <p className={styles.header}>Hi, Welcome to Alpha</p>
            <p className={styles.subTxt}>Create an account and enjoy Alpha</p>
            </div>
            <form onSubmit={register} className={styles.form}>
            <div>
                <p className={styles.label}>Name</p>
                <i className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 2C11.0111 2 10.0444 2.29324 9.22215 2.84265C8.3999 3.39206 7.75904 4.17295 7.3806 5.08658C7.00216 6.00021 6.90315 7.00555 7.09607 7.97545C7.289 8.94536 7.7652 9.83627 8.46447 10.5355C9.16373 11.2348 10.0546 11.711 11.0245 11.9039C11.9945 12.0969 12.9998 11.9978 13.9134 11.6194C14.827 11.241 15.6079 10.6001 16.1573 9.77785C16.7068 8.95561 17 7.98891 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2V2ZM12 10C11.4067 10 10.8266 9.82405 10.3333 9.49441C9.83994 9.16476 9.45542 8.69623 9.22836 8.14805C9.0013 7.59987 8.94189 6.99667 9.05764 6.41473C9.1734 5.83279 9.45912 5.29824 9.87868 4.87868C10.2982 4.45912 10.8328 4.1734 11.4147 4.05764C11.9967 3.94189 12.5999 4.0013 13.1481 4.22836C13.6962 4.45542 14.1648 4.83994 14.4944 5.33329C14.8241 5.82664 15 6.40666 15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10V10ZM21 21V20C21 18.1435 20.2625 16.363 18.9497 15.0503C17.637 13.7375 15.8565 13 14 13H10C8.14348 13 6.36301 13.7375 5.05025 15.0503C3.7375 16.363 3 18.1435 3 20V21H5V20C5 18.6739 5.52678 17.4021 6.46447 16.4645C7.40215 15.5268 8.67392 15 10 15H14C15.3261 15 16.5979 15.5268 17.5355 16.4645C18.4732 17.4021 19 18.6739 19 20V21H21Z" fill="#8F95B2"/>
</svg></i>
                <input 
                className={styles.inputField} 
                type="text" 
                name="name"
                id="name"           
                placeholder='Don Full'
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                />
                </div>
                <div>
                <p className={styles.label}>Email address</p>
                <i className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM20.8125 6.34687V18.5625H3.1875V6.34687L2.54063 5.84297L3.46172 4.65938L4.46484 5.43984H19.5375L20.5406 4.65938L21.4617 5.84297L20.8125 6.34687V6.34687ZM19.5375 5.4375L12 11.2969L4.4625 5.4375L3.45938 4.65703L2.53828 5.84062L3.18516 6.34453L11.1914 12.5695C11.4217 12.7484 11.7049 12.8455 11.9965 12.8455C12.2881 12.8455 12.5713 12.7484 12.8016 12.5695L20.8125 6.34687L21.4594 5.84297L20.5383 4.65938L19.5375 5.4375Z" fill="#8F95B2"/>
                    </svg></i>
                <input 
                className={styles.inputField} 
                type="email" 
                name="email"
                id="email"           
                placeholder='Alpha@gmail.com'
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                />
                </div>
                
                <div className={styles.last}>
                <p className={styles.label}>Password</p>
                <i className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.5 10.875H17.9062V5.625C17.9062 3.96797 16.5633 2.625 14.9062 2.625H9.09375C7.43672 2.625 6.09375 3.96797 6.09375 5.625V10.875H4.5C4.08516 10.875 3.75 11.2102 3.75 11.625V20.625C3.75 21.0398 4.08516 21.375 4.5 21.375H19.5C19.9148 21.375 20.25 21.0398 20.25 20.625V11.625C20.25 11.2102 19.9148 10.875 19.5 10.875ZM7.78125 5.625C7.78125 4.90078 8.36953 4.3125 9.09375 4.3125H14.9062C15.6305 4.3125 16.2188 4.90078 16.2188 5.625V10.875H7.78125V5.625ZM18.5625 19.6875H5.4375V12.5625H18.5625V19.6875ZM11.3438 16.4297V17.6719C11.3438 17.775 11.4281 17.8594 11.5312 17.8594H12.4688C12.5719 17.8594 12.6562 17.775 12.6562 17.6719V16.4297C12.8497 16.2908 12.9941 16.0941 13.0687 15.8679C13.1432 15.6417 13.1441 15.3977 13.0711 15.1709C12.9982 14.9442 12.8552 14.7465 12.6627 14.6062C12.4702 14.466 12.2382 14.3904 12 14.3904C11.7618 14.3904 11.5298 14.466 11.3373 14.6062C11.1448 14.7465 11.0018 14.9442 10.9289 15.1709C10.8559 15.3977 10.8568 15.6417 10.9313 15.8679C11.0059 16.0941 11.1503 16.2908 11.3438 16.4297V16.4297Z" fill="#8F95B2"/>
                    </svg></i>
                <input 
                className={styles.inputField}  
                type="password" 
                placeholder='******'
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                />
                </div>

                <div className={styles.last}>
                <p className={styles.label}>Confirm Password</p>
                <i className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.5 10.875H17.9062V5.625C17.9062 3.96797 16.5633 2.625 14.9062 2.625H9.09375C7.43672 2.625 6.09375 3.96797 6.09375 5.625V10.875H4.5C4.08516 10.875 3.75 11.2102 3.75 11.625V20.625C3.75 21.0398 4.08516 21.375 4.5 21.375H19.5C19.9148 21.375 20.25 21.0398 20.25 20.625V11.625C20.25 11.2102 19.9148 10.875 19.5 10.875ZM7.78125 5.625C7.78125 4.90078 8.36953 4.3125 9.09375 4.3125H14.9062C15.6305 4.3125 16.2188 4.90078 16.2188 5.625V10.875H7.78125V5.625ZM18.5625 19.6875H5.4375V12.5625H18.5625V19.6875ZM11.3438 16.4297V17.6719C11.3438 17.775 11.4281 17.8594 11.5312 17.8594H12.4688C12.5719 17.8594 12.6562 17.775 12.6562 17.6719V16.4297C12.8497 16.2908 12.9941 16.0941 13.0687 15.8679C13.1432 15.6417 13.1441 15.3977 13.0711 15.1709C12.9982 14.9442 12.8552 14.7465 12.6627 14.6062C12.4702 14.466 12.2382 14.3904 12 14.3904C11.7618 14.3904 11.5298 14.466 11.3373 14.6062C11.1448 14.7465 11.0018 14.9442 10.9289 15.1709C10.8559 15.3977 10.8568 15.6417 10.9313 15.8679C11.0059 16.0941 11.1503 16.2908 11.3438 16.4297V16.4297Z" fill="#8F95B2"/>
                    </svg></i>
                <input 
                className={styles.inputField}  
                type="password" 
                placeholder='******'
                value={confirmPassword}
                onChange={(ev) => setConfirmPassword(ev.target.value)}
                />
                </div>
                {/* <Link className={styles.fgt} to=''>forgot password?</Link> */}
                <button className={styles.btn} type="submit">
                   Sign Up
                </button>
             <p> Already have an account?  <Link className={styles.fgt} to='/sign-in'> Login</Link></p>

            </form>
            




        </div>
        
    </div>

    );
}

export default LeftSignin;

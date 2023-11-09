import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from '../../atoms/Button';
import { Link } from 'react-router-dom';
import styles from '../../css modules/SignUp.module.css';

const SignUp = () => {
  const navigate = useNavigate(); // Create a navigate function
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

    if (response.status !== 200) {
      const responseData = await response.json(); // Assuming server returns JSON
      alert(`Registration failed: ${responseData.message}`);
    } else {
      alert('Registration successful!');
      navigate('/welcome-1');
    }
  }

  return (
    <div className={styles.signup}>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.Header}>Sign up to Alpha</p>
          <p className={styles.subTxt}>
            Already have an account?{' '}
            <Link to="/sign-in" className={styles.span}>
              Sign In
            </Link>
          </p>
        </div>

        <div className={styles.googleSignup}>
          <svg
            className={styles.GmailLogo}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            {/* Gmail logo path */}
          </svg>

          <Link className={styles.gmailTxt}>Sign up with Gmail</Link>
        </div>

        <div className={styles.divider}>
          <div className={styles.line}></div>
          <p className={styles.or}>OR</p>
          <div className={styles.line}></div>
        </div>

        <form onSubmit={register}>
          <input
            className={styles.input}
            type="text"
            name=""
            id=""
            placeholder="Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />

          <input
            className={styles.input}
            type="text"
            name=""
            id=""
            placeholder="Email Address"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />

          <input
            className={styles.input}
            type="password"
            name=""
            id=""
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />

          <input
            className={styles.input}
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(ev) => setConfirmPassword(ev.target.value)}
          />

          <button className={styles.btn} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

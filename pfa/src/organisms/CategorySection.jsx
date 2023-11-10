import React, { useState } from 'react';
import styles from '../css modules/CategorySection.module.css';


const CategorySection = ({ onAddExpenditure }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

  
    onAddExpenditure({ category, amount });


    setCategory('');
    setAmount('');
  };

  const labelStyle = {
    fontSize: '18px',
    marginBottom: '12px',
    color: '#333',
  };

  const selectStyle = {
    width: '80%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #FFE7D1',
    borderRadius: '4px',
    boxSizing: 'border-box',
    borderRadius: '6px',
    marginLeft: '31px'
  };

  return (
    <div className={styles.container} >
        <p className={styles.headTxt}>Add Expepnditure</p>
        <form style={{width: '100%',}} action="">
        <select id="category" style={selectStyle}>
        <option value="">Category...</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Rent">Rent</option>
        <option value="Clothing">Clothing</option>
        <option value="Others">Others</option>
       </select>
       <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',marginLeft:'32px',marginBottom:'28px'}}>
            <label className={styles.label} htmlFor="">amount</label>
            <input className={styles.amtInput} type="text" name="" id="" />
       </div>
            <button className={styles.btn}>Add</button>
      
        </form>
    </div>
  );
};

export default CategorySection;

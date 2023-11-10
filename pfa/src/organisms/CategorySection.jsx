import React from 'react';
import styles from '../css modules/CategorySection.module.css';

const CategorySection = () => {
//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: '20px',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#fff',
//   };

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

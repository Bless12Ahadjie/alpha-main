import React from 'react';

// const FullName = 'Keneth Dapaa'

const ProfileForm = () => {
const styles ={
container:{
    marginLeft: '65px',
    overflow: 'hidden',
    width: '100vw',
    marginBottom: '233px',
    marginTop: '65px'
    
},
form: {
    width: '90%',
    height: '204px',
    flexShrink: '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
 
},
LeftInfo:{
    width: '501px',
    height: '168px'

},
LeftInfoWrapper:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '21px',
},
label:{
    color: '#171F25',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',

},
btn:{
    marginTop: '-87px',
    marginLeft: '934px',
    width: '181px',
    height: '41px',
    flexShrink: '0',
    background: '#432CDC',
    color: '#fff',
    cursor: 'pointer',
    border: 'none'

},
input:{
    borderRadius: '5px',
    border: '1px solid rgba(23, 31, 37, 0.50)',
    width: '266px',
    height: '36px',
    flexShrink: '0',
    backgroundColor: '#E8EDFD',
    paddingLeft: '21px'

},
}

    return (
        <div style={styles.container}>
            <form  action="">
                <div style={styles.form}>
                <div style={styles.LeftInfo}>
                    <div style={styles.LeftInfoWrapper}>
                    <label style={styles.label} htmlFor="">Username</label>
                    <input style={styles.input} type="text" placeholder='Don Full' />
                    </div>
{/* 
                    <div style={styles.LeftInfoWrapper}>
                    <label style={styles.label}  htmlFor="">Username</label>
                    <input style={styles.input} type="number" />
                    </div>                   */}
                    
                     <div style={styles.LeftInfoWrapper}>
                    <label style={styles.label}  htmlFor="">Income</label>
                    <input style={styles.input} type="number" />
                    </div>


                </div>
                <div style={styles.LeftInfo}>
                    <div style={styles.LeftInfoWrapper}>
                    <label style={styles.label} htmlFor="">Spending Limit</label>
                    <input style={styles.input} type="number" />
                    </div>

                    <div style={styles.LeftInfoWrapper}>
                    <label style={styles.label}  htmlFor="">How much will you like to save</label>
                    <input style={styles.input} type="number" />
                    </div>                  

                </div>
                </div>
                <button style={styles.btn}>Continue</button>

            </form>
        </div>
    );
}

export default ProfileForm;

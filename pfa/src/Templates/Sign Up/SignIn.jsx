import React from 'react';
import RightImg from '../../atoms/RightImg';
import LeftSignin from '../../molecules/LeftSignin';

const SignIn = () => {
    const container = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
    }
    return (
        <div style={container}>
            <LeftSignin/>
            <RightImg/>
        </div>
    );
}

export default SignIn;

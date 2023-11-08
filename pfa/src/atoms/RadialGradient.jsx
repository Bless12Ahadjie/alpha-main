import React from 'react';

const RadialGradient = () => {
    const container = {
        width: '711px',
        height: '708px',
        flexShrink: '0',
        borderRadius: '711px',
        background: 'linear-gradient(53deg, rgba(252, 98, 122, 0.50) 15.45%, rgba(86, 118, 253, 0.50) 91.84%)',
        filter: 'blur(25px)',
        position: 'relative',
        margin: ' 0 -123px',
        zIndex:'-6'

    }

    return (
        <div style={container}>
            
        </div>
    );
}

export default RadialGradient;

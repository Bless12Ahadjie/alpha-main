import React from 'react';

const DashSection = () => {
    const container = {
        width: '533px',
        height: '270px',
        borderRadius: '28px',
        background: '#c2c2c2',
        marginLeft: '65px',
        padding: '2px 0 0 35px'

    }
    const headTxt ={
        color: '#000',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal'
    }
    const downTxt ={
        color: '#1b1b1b',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 'normal',
        marginTop: '-12px'
    }
    const dateTxt ={
        color: '#fff',
        fontSize: '11px',
        fontStyle: 'normal',
        fontWeight: '100',
        lineHeight: 'normal',
        marginBottom: '14px'
    }

    const TxtWrapper = {
        width: '445px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: '-14px'
    }
        
    const title ={
            fontSize: '22px',
            fontStyle: 'bold',
            fontWeight: '700',
            lineHeight: 'normal'
        }
    
    const rule ={
        width: '464px',
        height: '2px',
        flexShrink: '0',
        background:'#dedede'
    }



    return (
        <div style={container}>
            <p style={title}>History</p>

            <div style={TxtWrapper}>
                <div>
                <p style={headTxt}>Rent</p>
                <p style={downTxt}>you just payed rent of 50.00 </p>
                </div>
                
                <p style={dateTxt}>2 hours ago</p>
            </div>

            <div style={rule}>

            </div>

            <div style={TxtWrapper}>
                <div>
                <p style={headTxt}>Food</p>
                <p style={downTxt}>you spent 50.00 on food </p>
                </div>
                
                <p style={dateTxt}>2 days ago</p>
            </div>


            <div style={rule}></div>

            <div style={TxtWrapper}>
                <div>
                <p style={headTxt}>Transportation</p>
                <p style={downTxt}>you spent 50.00 on food</p>
                </div>
                
                <p style={dateTxt}>last month</p>
            </div>
     
            
        </div>
    );
}

export default DashSection;

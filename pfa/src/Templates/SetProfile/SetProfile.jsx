import React from 'react';
import HomeNav from '../../molecules/HomeNav';
import ProfileHero from '../../organisms/ProfileHero';

const SetProfile = () => {

    const styles = {
        container:{
            overflow: 'hidden',
        },
    }
    return (
        <div style={styles.container}>
            <HomeNav/>
            <ProfileHero/>
        </div>
    );
}

export default SetProfile;

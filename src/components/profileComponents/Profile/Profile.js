import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

const Profile = ({setHeading}) => {

    const [color, setColor] = useState('#000000')
    
    useEffect(() => {
        setHeading('Profile')
    }, []);

    const flameColor = (streak) => {
        if (streak > 50) return '#B7E8EB';
        if (streak > 30) return '#66BEF9';
        if (streak > 20) return '#F0BA70';
        if (streak > 10) return '#F68656';
        if (streak > 6)  return '#EA5A3E';
        if (streak > 3)  return '#DA2B27';
        if (streak > 0)  return '#c12600';
    }

    return ( 
        <main>
            <div className='spacer'></div>
            <div className='user-info-wrapper'>
                <div className='user-info-container'>
                    <div className='image-wrapper'>
                        <img className='profile-image' src='https://images.unsplash.com/photo-1667338614163-6efc1ca91b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'></img>
                    </div>
                    <div className='user-details'>
                        <h2 className='name'>Scott Andermann</h2>
                        <p>31 y/o</p>
                        <p>Joined: 11/2022</p>
                        <p>Hacks: 123</p>
                    </div>
                </div>
                <h2><FontAwesomeIcon icon={faFireFlameCurved} color={flameColor(21)} /> 5 day streak</h2>
            </div>
            <div className='achievements'>

            </div>
            <div className='groups'>

            </div>
        </main>
     );
}
 
export default Profile;
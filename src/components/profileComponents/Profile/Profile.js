import React, {useEffect} from 'react';
import './Profile.css';

const Profile = ({setHeading}) => {
    
    useEffect(() => {
        setHeading('Profile')
    }, []);

    return ( 
        <main>
            <div className='spacer'></div>
            <div className='user-info-wrapper'>
                <div className='user-info-container'>
                    <div className='image-wrapper'>
                        <img className='profile-image' src='https://images.unsplash.com/photo-1667338614163-6efc1ca91b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'></img>
                    </div>
                    <div className='user-details'>
                        <h2>Scott Andermann</h2>
                        <p>31 y/o</p>
                        <p>Joined: 11/2022</p>
                    </div>
                </div>
                <h2>5 day streak</h2>
            </div>
            <div className='achievements'>

            </div>
            <div className='groups'>

            </div>
        </main>
     );
}
 
export default Profile;
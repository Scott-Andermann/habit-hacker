import React, {useEffect} from 'react';
import './Profile.css';

const Profile = ({setHeading}) => {
    
    useEffect(() => {
        setHeading('Profile')
    }, []);

    return ( 
        <main>
            {/* <NavBar /> */}
        </main>
     );
}
 
export default Profile;
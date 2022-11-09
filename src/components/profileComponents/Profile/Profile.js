import React, {useEffect} from 'react';
import './Profile.css';

const Profile = ({setHeading}) => {
    
    useEffect(() => {
        setHeading('Profile')
    }, []);

    const handleClick = async () => {
        const response = await fetch('https://a7htm016ka.execute-api.us-east-1.amazonaws.com/dev/v1/activities/2');
        const result = await response.json();
        console.log(result);
    }

    return ( 
        <main>
            <div className='spacer'></div>
            <button onClick={handleClick}>Get data</button>
        </main>
     );
}
 
export default Profile;
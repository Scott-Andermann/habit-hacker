import React from 'react';
import './ProfileModal.css';

const ProfileModal = ({modal}) => {
    return ( 
        <div className='modal' style={{height: modal ? '76px' : '0', color: modal ? 'black' : 'transparent'}}>
            <li>Edit Profile</li>
            <li>Logout</li>
        </div>
     );
}
 
export default ProfileModal;
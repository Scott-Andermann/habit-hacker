import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideCough } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './ProfileBar.css';

const ProfileBar = () => {
    return ( 
        <div className='profile'>
            {/* <FontAwesomeIcon icon={faCaretDown} size='lg' className='icon caret' /> */}
            <FontAwesomeIcon icon={faHeadSideCough} size='2x' className='icon'/>
        </div>
     );
}
 
export default ProfileBar;
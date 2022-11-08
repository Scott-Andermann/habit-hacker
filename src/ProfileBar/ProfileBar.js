import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideCough } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './ProfileBar.css';

const ProfileBar = ({setModal}) => {
    return ( 
        <div className='profile' onClick={() => setModal(prev => !prev)}>
            {/* <FontAwesomeIcon icon={faCaretDown} size='lg' className='icon caret' /> */}
            <FontAwesomeIcon icon={faHeadSideCough} size='2x' className='icon'/>
        </div>
     );
}
 
export default ProfileBar;
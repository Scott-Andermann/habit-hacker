import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    return (
        <nav>
            <Link className='nav-link' to='/dashboard'><FontAwesomeIcon icon={faHouse} size='2x' className='icon' /></Link>
            <Link className='nav-link'><FontAwesomeIcon icon={faCircleInfo} size='2x' className='icon' /></Link>
            <Link className='nav-link'><FontAwesomeIcon icon={faCirclePlus} size='2x' className='icon' /></Link>
            <Link className='nav-link' to='/profile'><FontAwesomeIcon icon={faUser} size='2x' className='icon' /></Link>
        </nav>
    );
}

export default NavBar;
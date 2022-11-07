import React from 'react';
import './TitleBar.css';

const TitleBar = ({heading}) => {
    return ( 
        <div className='main-heading'>
            <h1>HabitHacker</h1>
            <h4>{heading}</h4>
        </div>
     );
}
 
export default TitleBar;
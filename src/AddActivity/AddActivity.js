import React, {useEffect} from 'react';
import './AddActivity.css';

const AddActivity = ({setHeading}) => {
    useEffect(() => {
        setHeading('Add Activity')
    }, []);

    return ( 
        <main>
            <div className='spacer'></div>
            <form className='activity-form'>
                <input placeholder='Title' className='activity-input'></input>
                <textarea placeholder='How was it?' className='activity-input activity-text'></textarea>
                <select name='activity-type' className='activity-input'>
                    <option value='dogWalk'>Dog Walk</option>
                    <option value='noWork'>Not working after work</option>
                    <option value='reading'>Reading</option>
                    <option value='ride'>Ride</option>
                    <option value='run'>Run</option>
                    <option value='walk'>Walk</option>
                    <option value='yoga'>Yoga</option>
                </select>
                <label className='input-label'>Activity Details</label>
                <input placeholder='External Link' className='activity-input'></input>
                <input placeholder='00:00:00' className='activity-input'></input>
                <input placeholder='0.00 mi' className='activity-input'></input>
            </form>
        </main>
     );
}
 
export default AddActivity;
import React, {useEffect, useState} from 'react';
import InputField from '../InputField/InputField';
import './AddActivity.css';

const AddActivity = ({setHeading}) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [activityType, setActivityType] = useState('walk');
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('');
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: send this info to lamba in POST request and add to DB
        const body = {title: title, date: date, description: description, link: link, duration: duration, distance: distance, activityType: activityType};
    }

    useEffect(() => {
        setHeading('Add Activity')
    }, []);

    return ( 
        <main>
            <div className='spacer'></div>
            <form className='activity-form' onSubmit={handleSubmit}>
                <InputField placeholder='Title' value={title} setValue={setTitle} type='text'/>
                <InputField value={date} setValue={setDate} type='date'/>
                <textarea placeholder='How was it?' className='activity-input activity-text' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <select name='activity-type' className='activity-input' value={activityType} onChange={(e) => setActivityType(e.target.value)}>
                    <option value='dogWalk'>Dog Walk</option>
                    <option value='noWork'>Not working after work</option>
                    <option value='reading'>Reading</option>
                    <option value='ride'>Ride</option>
                    <option value='run'>Run</option>
                    <option value='walk'>Walk</option>
                    <option value='yoga'>Yoga</option>
                </select>
                <label className='input-label'>Activity Details</label>
                <InputField placeholder='External Link' value={link} setValue={setLink} type='text'/>
                <InputField placeholder='00:00:00' value={duration} setValue={setDuration} type='text'/>
                <InputField placeholder='0.00 mi' value={distance} setValue={setDistance} type='number'/>
                <div className='submit-wrapper activity'>
                    <button className='submit-button activity' type='submit'>Save Activity</button>
                </div>
            </form>
        </main>
     );
}
 
export default AddActivity;
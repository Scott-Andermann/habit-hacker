import React, {useState, useEffect} from 'react';
import InputField from '../InputField/InputField';
import './TimeInput.css';

const TimeInput = ({setDuration}) => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        setDuration(hours * 3600 + minutes * 60 + seconds)
    }, [hours, minutes, seconds]);

    return ( 
        <div className='activity-time-wrapper'>
            <InputField placeholder='hours' value={hours} setValue={setHours} type='number'/>
            <InputField placeholder='minutes' value={minutes} setValue={setMinutes} type='number'/>
            <InputField placeholder='seconds' value={seconds} setValue={setSeconds} type='number'/>
        </div>
     );
}
 
export default TimeInput;
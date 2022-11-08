import React from 'react';

const InputField = ({placeholder, value, setValue, type}) => {
    return ( 
        <input placeholder={placeholder} className='activity-input' onChange={(e) => setValue(e.target.value)} value={value} type={type}></input>
     );
}
 
export default InputField;
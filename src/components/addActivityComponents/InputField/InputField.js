import React, {useEffect} from 'react';

const InputField = ({placeholder, value, setValue, type}) => {

    useEffect(() => {
        if (type == 'date') {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            setValue(`${yyyy}-${mm}-${dd}`)

        }
    }, []);

    return ( 
        <input placeholder={placeholder} className='activity-input' onChange={(e) => setValue(e.target.value)} value={value} type={type} step='any'></input>
     );
}
 
export default InputField;
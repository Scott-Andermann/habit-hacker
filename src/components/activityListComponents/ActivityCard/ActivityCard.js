import React, {useState, useEffect} from 'react';
import './ActivityCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking, faCaretDown, faPersonRunning} from '@fortawesome/free-solid-svg-icons';

// const data = {
//     "id": 3,
//     "userId": 2,
//     "date_field": "2022-10-06T00:00:00.000Z",
//     "actType": "walk",
//     "title": "walking around",
//     "actDescription": "great",
//     "duration": 24001,
//     "mileage": 4,
//     "points": 2,
//     "externalLink": "https://www.strava.com/activities/8084505727"
// }

const ActivityCard = ({data}) => {

    const [open, setOpen] = useState(false);

    const ActivityType = ({actType}) => {
        let icon;
        switch (actType) {
            case 'walk':
                icon = faPersonWalking;
                break;
            case 'run':
                icon = faPersonRunning;
                break;
        }
        return (
            <FontAwesomeIcon icon={icon} size='3x'/>
        )
    }

    const buildDate = (dateString) => {
        const newDate = new Date(dateString);
        return newDate.toISOString().split('T')[0];
    }

    return ( 
        <div className={open ? 'open activity-card' : 'activity-card'}>
            <p>{buildDate(data.date_field)}</p>
            <h2>{data.title}</h2>
            <div className='card-contents'>
                <ActivityType actType={data.actType} />
                {/* <FontAwesomeIcon icon={faPersonWalking} size='3x' /> */}
                <div className='card-details'>
                    <p>Points: 2</p>
                    <p>Streak: 2</p>
                </div>
            </div>
            {open && <div>
                <div className='open-card-details'>
                    <p>30h1m</p>
                    <p>3.04mi</p>
                </div>
                <p>{data.actDescription}</p>
            </div>}
            <button className='show-more' onClick={() => setOpen(prev => !prev)}>
                <FontAwesomeIcon icon={faCaretDown} rotation={open ? 180 : 0} />
                <p>{open ? 'less' : 'more'}</p>
            </button>
        </div>
     );
}
 
export default ActivityCard;
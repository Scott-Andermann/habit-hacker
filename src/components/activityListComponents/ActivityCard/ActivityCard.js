import React, {useState, useEffect} from 'react';
import './ActivityCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking, faCaretDown, faPersonRunning, faDog, faBook, faBan, faBriefcase, faSpa} from '@fortawesome/free-solid-svg-icons';

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
            case 'dogWalk':
                icon = faDog;
                break;
            case 'reading':
                icon = faBook;
                break;
            case 'yoga':
                icon = faSpa;
                break;
            case 'noWork':
                return (
                    <div className='no-work'>
                        <FontAwesomeIcon className='no-work-icon briefcase' icon={faBriefcase} size='2x' />
                        <FontAwesomeIcon className='no-work-icon ban' icon={faBan} size='3x' />
                    </div>
                )
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

    const buildDuration = (seconds) => {
        if (seconds < 3600) {
            return `${Math.floor((data.duration / 60) % 60)}m${data.duration % 60}s`;
        }
        return `${Math.floor(data.duration/3600)}h${Math.floor((data.duration / 60) % 60)}m${data.duration % 60}s`;
    }

    return ( 
        <div className={open ? 'open activity-card' : 'activity-card'} style={{
            height: open ? '233px' : '167px'
        }}>
            <p>{buildDate(data.date_field)}</p>
            <h2>{data.title}</h2>
            <div className='card-contents'>
                <ActivityType actType={data.actType} />
                {/* <FontAwesomeIcon icon={faPersonWalking} size='3x' /> */}
                <div className='card-details'>
                    <h4>Points: {data.points}</h4>
                    <h4>Streak: 2</h4>
                </div>
            </div>
            <section style={{transform: open ? 'scaleY(1)' : 'scaleY(0)'}}>
                <div className='open-card-details'>
                    {data.duration > 0 && <h4>{buildDuration(data.duration)}</h4>}
                    {data.mileage > 0 && <h4>{data.mileage}mi</h4>}
                </div>
                <p>{data.actDescription}</p>
            </section>
            {(data.mileage > 0 || data.duration > 0 || data.actDescription !== '') && <button className='show-more' onClick={() => setOpen(prev => !prev)}>
                <FontAwesomeIcon icon={faCaretDown} rotation={open ? 180 : 0} />
                <p>{open ? 'less' : 'more'}</p>
            </button>}
        </div>
     );
}
 
export default ActivityCard;
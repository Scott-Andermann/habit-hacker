import React, {useEffect, useState} from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import './Activities.css';

const Activities = ({setHeading}) => {
    const [activityData, setActivityData] = useState([]);

    const getActivities = async () => {
        const response = await fetch('https://a7htm016ka.execute-api.us-east-1.amazonaws.com/dev/v1/activities/2');
        const result = await response.json();
        console.log(result);
        setActivityData(result.body)
    }
    
    useEffect(() => {
        setHeading('Activities')
        // getActivities()
    }, []);

    const data = {
        "id": 3,
        "userId": 2,
        "date_field": "2022-10-06T00:00:00.000Z",
        "actType": "walk",
        "title": "walking around",
        "actDescription": "great blah, blah ahaha hab akdlasj dklaj d,a lmdna,m",
        "duration": 24001,
        "mileage": 4,
        "points": 2,
        "externalLink": "https://www.strava.com/activities/8084505727"
    }

    return ( 
        <main>
            {/* <button onClick={getActivities} style={{position: 'absolute'}}>Get data</button> */}
            <div className='spacer'></div>
            <div className='activity-cards-wrapper'>
                {activityData.length > 0 && activityData.map(element => <ActivityCard data={element} key={element.id}/>)}
                <ActivityCard data={data}/>
                <ActivityCard data={data}/>
                <ActivityCard data={data}/>
                <ActivityCard data={data}/>
                <ActivityCard data={data}/>
                <ActivityCard data={data}/>
                <ActivityCard data={data}/>
                <ActivityCard data={data}/>
            </div>
        </main>
     );
}
 
export default Activities;
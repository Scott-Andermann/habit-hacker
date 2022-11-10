import React, {useEffect, useState} from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import './Activities.css';


const data = [{
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
},
{
    "id": 4,
    "userId": 2,
    "date_field": "2022-11-06T00:00:00.000Z",
    "actType": "run",
    "title": "Afternoon Run",
    "actDescription": "this is the run card",
    "duration": 24001,
    "mileage": 4,
    "points": 2,
    "externalLink": "https://www.strava.com/activities/8084505727"
},
{
    "id": 5,
    "userId": 2,
    "date_field": "2022-11-10T00:00:00.000Z",
    "actType": "dogWalk",
    "title": "Dog walk",
    "actDescription": "this dog walk was great, I took huck and poppy a long way and they really enjoyed the time outside and the time with me and Kelsey",
    "duration": 24001,
    "mileage": 4,
    "points": 2,
    "externalLink": "https://www.strava.com/activities/8084505727"
},
{
    "id": 6,
    "userId": 2,
    "date_field": "2022-11-10T00:00:00.000Z",
    "actType": "reading",
    "title": "Crown of Thorns",
    "actDescription": "read 10 pages",
    "duration": '',
    "mileage": '',
    "points": 2,
    "externalLink": "https://www.strava.com/activities/8084505727"
},
{
    "id": 7,
    "userId": 2,
    "date_field": "2022-11-10T00:00:00.000Z",
    "actType": "noWork",
    "title": "",
    "actDescription": "",
    "duration": '',
    "mileage": '',
    "points": 2,
    "externalLink": "https://www.strava.com/activities/8084505727"
},
{
    "id": 8,
    "userId": 2,
    "date_field": "2022-11-10T00:00:00.000Z",
    "actType": "yoga",
    "title": "Hot Yoga",
    "actDescription": "whew that was a spicy one",
    "duration": 2700,
    "mileage": '',
    "points": 2,
    "externalLink": "https://www.strava.com/activities/8084505727"
},
]

const Activities = ({setHeading}) => {
    const [activityData, setActivityData] = useState(data);

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



    return ( 
        <main>
            {/* <button onClick={getActivities} style={{position: 'absolute'}}>Get data</button> */}
            <div className='spacer'></div>
            <div className='activity-cards-wrapper'>
                {activityData.length > 0 && activityData.map(element => <ActivityCard data={element} key={element.id}/>)}
            </div>
        </main>
     );
}
 
export default Activities;
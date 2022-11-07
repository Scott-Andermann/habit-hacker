import React, {useEffect} from 'react';
import './Dashboard.css';
import BumpChart from '../BumpChart/BumpChart';
import {lineData} from '../BumpChart/lineData'
import LineChart from '../LineChart/LineChart';

const Dashboard = ({setHeading}) => {
    
    useEffect(() => {
        setHeading('Dashboard')
    }, []);

    return ( 
        <main>
            {/* <NavBar /> */}
            <BumpChart lineData={lineData}/>
            <LineChart />
        </main>
     );
}
 
export default Dashboard;
import React, {useEffect} from 'react';
import './Dashboard.css';

const Dashboard = ({setHeading}) => {
    
    useEffect(() => {
        setHeading('Dashboard')
    }, []);

    return ( 
        <main>
            {/* <NavBar /> */}
        </main>
     );
}
 
export default Dashboard;
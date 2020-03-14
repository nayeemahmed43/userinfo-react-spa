import React, {useState} from 'react';
import userAttribute from '../Data/data';
import './UserList.css'
import SingleUser from './SingleUser/SingleUser';
import UserDashboard from './UserDashboard/UserDashboard';

const UserList = () => {
    const [dashboard, setDashboard] = useState([]);

    const handleAddToDashboard = (user) =>{
                    const newDashboard = dashboard.find(object => object == user) ? dashboard : [...dashboard, user];
                    setDashboard ( newDashboard);
                

    }
    return (
        <div className = "container">
            <div className = "user-container">
                {
                    userAttribute.map( user => 
                        <SingleUser 
                        handleAddToDashboard = {handleAddToDashboard}
                        user = {user}
                        ></SingleUser> 
                    )
                }
            </div> 
             <div className = "calculation-container">
                <UserDashboard dashboard = {dashboard}
                                userAttribute={userAttribute}
                                ></UserDashboard>
             </div>
        </div>
            
        
    );
};

export default UserList;
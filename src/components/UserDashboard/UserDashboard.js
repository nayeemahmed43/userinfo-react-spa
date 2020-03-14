import React from 'react';
import './UserDashboard.css';
const UserDashboard = (props) => {
    const dashboard = props.dashboard;
   
     const totalSalary = dashboard.reduce((total,user) => total+user.salary, 0) 
    return (
        <div className="dashboard">
            <h1>Total</h1>
            <p>Total Added Users: {dashboard.length}</p>
            <p>Total Salary: {totalSalary} $</p><br></br>
            <h5>Added Users Name</h5>
            {dashboard.map(i => <ul><li>{i.name}</li></ul>)}
           
            
        </div>
    );
};

export default UserDashboard;
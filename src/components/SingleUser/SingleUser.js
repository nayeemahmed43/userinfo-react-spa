import React from 'react';
import './SingleUser.css';

const SingleUser = (props) => {
    const {id,name,email,phone,salary,img} = props.user;
    return (
        
            <div className="card">
                <img src={img} alt = "" />
                <div className="card-body col-md-10">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><b>Email:</b> {email}</p>
                    <p className="card-text"><b>Phone: </b>{phone}</p>
                    <p className="card-text"><b>Yearly Salary: </b>{salary}</p>
                    <a href="#" className="btn btn-primary" onClick = {()=>props.handleAddToDashboard(props.user)}>Add</a>
                </div>
            </div>
        
    );
};

export default SingleUser;
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className = "header">
                <h1>User Info</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/users">Users</a>
                <a href="/about">About</a>
            </nav>
        </div>
        
    
    );
};

export default Header;
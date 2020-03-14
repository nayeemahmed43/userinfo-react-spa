import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserList from './components/UserList';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <UserList></UserList>
    </div>
  );
}

export default App;

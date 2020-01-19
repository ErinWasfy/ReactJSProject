import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChildOfChild from './ChildOfChild';
import Parent from './parent';
import Buttonincrement from './buttonincrement'
import NewForm from './NewForm';
function App() {
  return (
    <div className="App">
      <Buttonincrement/>
     <NewForm/>
    </div>
  );
}

export default App;

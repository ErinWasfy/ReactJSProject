import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChildOfChild from './ChildOfChild';
//import Parent from './parent';
//import {reduxForm, Field} from 'redux-form';
import Buttonincrement from './buttonincrement'
import DemoForm from './RegisterFormValidation';
function App() {
  return (
    <div className="App">
      <Buttonincrement/>
     <DemoForm/>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import ChildOfChild from './ChildOfChild';

export default class Child extends React.Component
{
    componentDidMount(){
console.log('Child01');
    }
    value(){
 return this.refs.ChildOfChild.value();
    }
    render()
    {
        return(
            <div>child 
                <ChildOfChild ref="ChildOfChild"/>
            </div>
        );
    }
} 
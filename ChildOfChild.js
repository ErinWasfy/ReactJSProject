import React from 'react';
import ReactDOM from 'react-dom';

export default class ChildOfChild extends React.Component
{
    componentDidMount(){
console.log('Child01.01');
    }
    value(){
return ReactDOM.findDOMNode(this.refs.input).value;
    }
    render()
    {
        return(
            <div>ChildOfChild
                <input hidden="true" ref="input" type="text" defaultValue="Test1"/>
            </div>
        );
    }
} 
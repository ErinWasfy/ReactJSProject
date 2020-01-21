import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child';

export default class parent extends React.Component
{
    componentDidMount(){
console.log('Parent did mount');
console.log('child:',this.refs.Child.value());
    }
    render()
    {
        return(
            <div> parent 
                <Child ref="Child"/>
            </div>
        );
    }
} 
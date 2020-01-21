import React from 'react';

export default class buttonincrement extends React.Component
{
 constructor(props)
 {
     super(props);
     this.state={incrementcount:0,clicked:false};
    //this.increment= this.increment.bind(this);
 }   
 increment()
 {
     const chkclickstatus=this.state.clicked;
  //  if(chkclickstatus)
   //  this.setState({incrementcount:this.state.incrementcount-1,clicked:false});
   //  else
     this.setState({incrementcount:this.state.incrementcount+1,clicked:true});
 }
 decrement()
 {
     if(this.state.incrementcount>0)
    this.setState({incrementcount:this.state.incrementcount-1,clicked:true});  
 }
 render()
 {
     return(
         <div>
             <form>

             </form>
             <button className="inc" onClick={this.increment.bind(this)}>Increment by value</button>
             <h1>{this.state.incrementcount}</h1>
             <button className="inc" onClick={this.decrement.bind(this)}>Decrement by value</button>
            
         </div>
     );
 }
}  
import React from 'react';
import ReactDOM from 'react-dom';

export default class MyTry extends React.Component {
    constructor(props){
    super(props);    
    
this.state={   
    someIcon: [],
    counter: 0
}  
    
};
    getRandomIcon = () => {
    let somepic = this.props.pictures;
    let randomNumber = Math.floor(Math.random() * somepic.length);
    return somepic[randomNumber]     
    }
     
     
  addSomething = () =>{
      let i = this.state.counter;
      let icon =  this.getRandomIcon();
           this.setState({
               someIcon: [...this.state.someIcon,icon]
           });
      }
  
 removeSomething = () => {
    let allIcons = this.state.someIcon.reverse();
    this.setState({
        someIcon: this.state.someIcon.slice(1, (allIcons.length))
      })
   }
  
  increment = () => {
    this.setState({ 
        counter: ++this.state.counter
    });
    this.addSomething();
  };
  decrement = () => {
    this.setState({
        counter: --this.state.counter 
    });
    this.removeSomething();
  };


  render(){ 
    return (
      <div>
        <p>Let's see what we have :D</p>
        <button type='button' onClick={this.increment}>+</button>{ }
        <button type='button' onClick={this.decrement}>-</button><br /><br />
         {this.state.someIcon.map((elem,i) => <div key={i}>Icon number: {i}<img width='100px'  height='100px' src={elem}></img></div>)}
      </div>
    );
  }

}
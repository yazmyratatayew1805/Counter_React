import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';


class App extends Component{
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 }
    ]
  };

 constructor(){
   super();
   console.log("App - Constructor");
 }

 handleIncrement = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({ counters});
 };

 handleonDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({ counters});
};
 

 handleReset = () => {
     const counters = this.state.counters.map( c => {
         c.value = 0;
         return c;
     });
     this.setState({ counters });
 };

 handleDelete = counterId => {
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({ counters })         
 };



 

  render() {
    return (
      <React.Fragment>
      
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <div className='container'>
        <Counters

        counters={this.state.counters }
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleonDecrement}
        onDelete={this.handleDelete}
        
        />
        </div>
      </React.Fragment>
    );
  }
}
  

export default App;

import React, { Component } from 'react';

class Counter extends Component {

    componentDidUpdate(prevProps, prevState){
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if(prevProps.counter.value !== this.props.counter.value){

        }      

    }

    componentWillUnmount(){
        console.log("Counter - Unmount");
    }
     
    render() {  
        console.log("Counter - Rendered");
         
        return (
        <div>
            
            <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
            <button
            onClick={() => this.props.onIncrement(this.props.counter)}            
            className="btn btn-secondary btn-sm m-2"            
            >
                +
            </button>

            <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            
            className="btn btn-secondary btn-sm m-2"            
            >
                -
            </button>

            <button 
            onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">
                Delete
            </button>
        </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        if(this.props.counter.value === 0){
            classes += "warning";
        }
        else if(this.props.counter.value < 0){
            classes += "danger";
        }
        else {
            classes += "primary";
        }
        
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'zero' : value;
    }
}
export default Counter;
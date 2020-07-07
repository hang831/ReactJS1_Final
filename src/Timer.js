import React from "react"

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        seconds: 0, 
         min: 0 ,
        date: '',
       
      };
    }
  
    tick() {
      this.setState(state => ({
        seconds: ++state.seconds %60      
      }));
    }
    
    mins() {    
      this.setState(state => ({
        min: state.min +1 
      }));  
    }

    date() {
      this.setState(state => ({
        date: new Date().toLocaleTimeString()
      }));
    }

    
  

    componentDidMount() {
      
      this.interval = setInterval(() => this.tick(), 1000);
      
      this.interval = setInterval(() => this.mins(), 60000); 

      this.interval = setInterval(() => this.date(), 1000);  

    }
    
  
    componentWillUnmount() {
      clearInterval(this.interval);
      
    }
    
    
    render() {

      return (
        <div>
          <div style={{float:"right"}}> 
          Process Time: {this.state.min}min{this.state.seconds}s
          </div>
          Time:{this.state.date}
        </div>
      );
    }
  }
  
  export default Timer
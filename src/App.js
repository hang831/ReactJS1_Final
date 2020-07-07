import React from "react";
import vsschooledata from "./vsschooledata"
import TodoItem from "./TodoItem"
//import ShowOutput  from "./ShowOutput"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            id:'',
            todoitem: vsschooledata, 
            //  ###  LocalStorage ###*/
          
            message: localStorage.getItem("message") || "" ,
            message1: localStorage.getItem("message1") || "" ,
            message2: localStorage.getItem("message2") || "" ,
           message3: localStorage.getItem("message3") || "" ,
            
            
        }
        this.handleClick = this.handleClick.bind(this)
        //this.handleClick2 = this.handleClick2.bind(this)

        this.handleAddClick = this.handleAddClick.bind(this);
        
        this.handleFinish1 = this.handleFinish1.bind(this);
        this.handleFinish2 = this.handleFinish2.bind(this);
        this.handleFinish3 = this.handleFinish3.bind(this);
        this.handleFinish4 = this.handleFinish4.bind(this);
         /*  ###  LocalStorage ###*/
        this.localStorage  = this.localStorage.bind(this);
        
    }
    //#1
    handleClick(id) {
       this.setState(prevState =>{
       
            
           const newarray = prevState.todoitem.map(get =>{

               if(get.id ===id){
                   get.completed = !get.completed        
               }
               return get
           })
           return {
               todoitem: newarray
           }
       })
    }


  //#2
  handleAddClick(e) {
    e.preventDefault();
    alert('Success')
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState =>{
    return {
        todoitem : prevState.todoitem.concat(newItem),  
    }    
    }); 
  }

  
  //#3
  handleFinish1(){
    const checkbox =document.getElementsByClassName('checkbox') //get all checkbox (array) 
    const buffer =document.getElementsByTagName('h3')  //get all message display (array)
    checkbox[0].checked = !!checkbox[0].checked
    
  if(  checkbox[0].checked===true ){ 
     buffer[0].style.textDecoration = " line-through "
      }else  {
        buffer[0].style.textDecoration = " none "}
      }

      handleFinish2(){
        const checkbox =document.getElementsByClassName('checkbox') //get all checkbox (array) 
        const buffer =document.getElementsByTagName('h3')  //get all message display (array)
        checkbox[1].checked = !!checkbox[1].checked
        
      if(  checkbox[1].checked===true ){ 
         buffer[1].style.textDecoration = " line-through "
          }else  {
            buffer[1].style.textDecoration = " none "}
          }

          handleFinish3(){
            const checkbox =document.getElementsByClassName('checkbox') //get all checkbox (array) 
            const buffer =document.getElementsByTagName('h3')  //get all message display (array)
            checkbox[2].checked = !!checkbox[2].checked
            
          if(  checkbox[2].checked===true ){ 
             buffer[2].style.textDecoration = " line-through "
              }else  {
                buffer[2].style.textDecoration = " none "}
              }

              handleFinish4(){
                const checkbox =document.getElementsByClassName('checkbox') //get all checkbox (array) 
                const buffer =document.getElementsByTagName('h3')  //get all message display (array)
                checkbox[3].checked = !!checkbox[3].checked
               
              if(  checkbox[3].checked===true ){ 
                 buffer[3].style.textDecoration = " line-through "
                  }else  {
                    buffer[3].style.textDecoration = " none "}
                  }

  localStorage (data, getid) {  
    //console.log(data, getid)

    if(getid === 1 || getid === '1') {
        
         const message1 = data
        const id = getid
            localStorage.setItem("message1", message1);
           
                this.setState({ message1 });
                this.setState({ id });
                
    }else if(getid === 2) {
        
        const message2 = data
        const id = getid
            localStorage.setItem("message2", message2);
                this.setState({ message2 });        
                this.setState({ id });
    }else if(getid === 3) {
       
        const message3 = data
        const id = getid
            localStorage.setItem("message3", message3);
                this.setState({ message3 });
                this.setState({ id });
    }else {
        const message = data
        const id = getid
            localStorage.setItem("message", message);
                this.setState({ message });
                this.setState({ id });
    }
        }


      
       
    render(){   
    
        const todos = this.state.todoitem.map(item => 
            <TodoItem           
             key={item.id}       
             item={item} 
             //value={item.value}
             handleClick={this.handleClick} 
             length={this.state.length}
             //handleClick2= {this.handleClick2}
             //message={this.state.message}
             message1={this.state.message1}
            // message2={this.state.message2}
            // message3={this.state.message3}

             localStorage={this.localStorage}            
             /> )

    return(
        
        
        <div style={{textAlign: "center"}}>
         <br></br>
             <h1>My todo lists</h1>       
                <button  onClick={this.handleAddClick} style={{backgroundColor: "green", color: "black", fontSize:20, padding: "5px 10px"}}> Add new todo </button>
            <h1> {todos}</h1> 
 {/* =============================JSX comment line======================================== */}
 
        <div className="list">
             <h2>Your First Todo:</h2>   <div style={{textAlign:"center"}}>
             <input  className="checkbox"   onChange={this.handleFinish1} type="checkbox"/>Finish </div>
                 <h3>  Your goal: "{this.state.message1}"</h3> 
                    <br></br>

                <h2>Your Second Todo:</h2>   <div style={{textAlign:"center"}}>
            <input className="checkbox"      onChange={this.handleFinish2}    type="checkbox"/>Finish</div>
                <h3>  Your goal: "{this.state.message2}"</h3> 
                    <br></br>

                <h2>Your Third Todo:</h2>   <div style={{textAlign:"center"}}>
            <input className="checkbox"      onChange={this.handleFinish3}    type="checkbox"/>Finish</div>
                <h3>  Your goal: "{this.state.message3}"</h3> 
                     <br></br>

                <h2>Others:</h2>  <div style={{textAlign:"center"}}>
            <input className="checkbox"       onChange={this.handleFinish4}    type="checkbox"/>Finish</div>
                <h3>  Your goal: "{this.state.message}"</h3> 
            </div>
            
         </div>
        )
    }
}

export default App

import React from "react"


function ShowOutput(props){
    const style = {color: "black"}
    
        if( props.item.completed === true){      
            style.textDecoration = " line-through "
        }
       
     //const save = props.message2.split(' ')
     //console.log(save)
    
     //console.log(props.message1)  
    // console.log(props.message3)  
       
return(
    
    <div>   
          <div className="list">
         Your First Todo:<div style={{textAlign:"center"}}>
             <input  onChange={ () => this.handleClick(props.item.id)}   type="checkbox"/>Finish</div>
             <h3>{props.message1}</h3> 
         <br></br>

     Your Second Todo:<div style={{textAlign:"center"}}>
         <input  type="checkbox"/>Finish</div>
         <h3>{props.message2}</h3> 
     <br></br>

     Your Third Todo:<div style={{textAlign:"center"}}>
         <input  type="checkbox"/>Finish</div>
          <h3>{props.message3}</h3> 
         </div>
        </div>
        )
}

export default ShowOutput 
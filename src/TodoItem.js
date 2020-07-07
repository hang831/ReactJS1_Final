import React from "react"

import  "./index.css"

function TodoItem(props){
    const style = {color: "black"}
    
        if( props.item.completed === true){      
            style.textDecoration = " line-through "
        }
       
    // console.log(props.message2)  
    // console.log(props.message3)  
     
    
return(
    
    <div>   
        
        <div className="list-items">
            <p >  My TodoItem Today:  <input className="inputbar" //style={style}  
                type="text" placeholder="Try to Typing your TODO "  
                    onChange={(e) => {
                        props.item.value = e.target.value
                        props.localStorage( props.item.value , props.item.id);    
            }} 
            />  </p>    
        </div> 
       

    </div>
      
)

}

export default TodoItem
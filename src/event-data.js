import React from "react";

export default function Eventobject (){
   
    const onClick = (ev) =>{
        let cal = ev.target.innerText
        let result = eval(cal) 
        alert(`${cal} = ${result}`)
    }
    return(
        <div>
           
            <button onClick={(ev) =>onClick(ev)}> 30 * 40 </button>
            
        </div>
    )
}
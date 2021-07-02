import React from "react";


// const buttons = [["clear","C"," / "],[9,8,7," * "],[6,5,4," - "],[3,2,1," + "],[0,"."," = "]]
// return (
// <div className="container">
// {buttons.map((button, index) => {
  
//   <div>
//     {button.map((values,index2)=>{
//     <Button key={index} label={button} click={() => this.clickHandler(button)} />
//     }
//     )
//   <div/>  
// })}
// </div>
// );





const Button = (props) =>{
  
  return (
    
      <button id={props.id} onClick={()=> {
             props.func(props.label)}}>{props.label}
      </button>
    
  )
};


const Display =(props)=>{
//   
  return(
    <div>
      <h1>{props.label}  </h1>
    </div>
  )
}



  export{
    Button,
    
    Display,
  }
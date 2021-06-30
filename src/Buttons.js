import React  from "react";

let display = null
let num1 = ""
let num2 = ""
let numA = "A"
let operator = (a,b)=> {}



const multiply = (a,b) => {
  return a * b
}

const add = (a,b) => {
  return a + b
}

const divide = (a,b) => {
  return a / b
}

const subtract = (a,b) => {
  return a - b
}


const superIf = (carrier)=>{
  
  console.log(carrier);
  if( carrier ===null){
    display=0
  } else if(carrier === "Clear" ) {
    display = null
    numA="A"
    num1 = ""
    num2 = ""
    operator = (a,b)=> {}
  } else if(carrier ===" C "){

    if(numA === "A"){
      num1 = ""
    }else{
      num2 = ""
    }
  } else if(carrier===" / "){

    operator=(a,b)=> divide(a,b);
    numA="B";

  } else if(carrier === " * "){

    operator=(a,b)=> multiply(a,b);
    numA="B";

  } else if(carrier === " - "){

    operator=(a,b)=> subtract(a,b);
    numA="B";

  } else if(carrier === " + "){
    console.log(1)
    operator=(a,b)=> add(a,b);
    numA="B";

  } else if(carrier === " = ") {
    console.log("=")
    let num = operator(parseInt(num1),parseInt(num2))
    console.log(num)
    num1 = num
    display = num1
    num2 = ""
    operator = (a,b)=> {}

  } else if (Number.isInteger(carrier)||carrier ===".") {

    if(numA === "A"){

      num1=`${num1}${carrier}`;
      display = num1;
      console.log("a")
      console.log(num1);

    }else{

      num2 = `${num2}${carrier}`;
      display = num2;
      console.log("b")
      console.log(num2)
        
    }

 }
}







const Button = (props) =>{


  return (
    <div>
      <button onClick={()=> {
             superIf(props.label)}}>{props.label}
      </button>
    </div>


  )
};

const Display =()=>{

  return(
    <div>
      <h1> {display} </h1>
    </div>
  )
}



  export{
    Button,
    
    Display,
  }
import React, { useState } from "react";
import './App.css';
import {Button, Display} from './Buttons.js'

function App() {
const [carrier, setcarrier] = useState("")
const [display, setdisplay] = useState(0);
const [num1, setnum1] = useState(0)
const [num2, setnum2] = useState(0)
const [numA, setnumA] = useState("A")
const [operator, setoperator] =useState("")

 


const superIf = (carrier)=>{

  console.log(carrier);
  if( carrier === null){
   setdisplay(0)
   setcarrier("") 
  } else if(carrier === " Clear " ) {

    setdisplay(0)
    setnumA("A")
    setnum1(0)
    setnum2(0)
    setoperator(()=>(a,b)=> {})
    setcarrier("")

  } else if(carrier ===" C "){

    if(numA === "A"){

      setnum1(0)
      setdisplay(0)
      setcarrier("")

    }else{

      setnum2(0)
      setdisplay(0)
      setcarrier("")
    }
  } else if(carrier ===" / "){
      setoperator("divide")
    
    setnumA("B")
    
    setcarrier("")

  } else if(carrier === " * "){
    setoperator("multiply")
    
    setnumA("B")
    setcarrier("")

  } else if(carrier === " - "){
    setoperator("subtract")
    
    setnumA("B")
    setcarrier("")
  } else if(carrier === " + "){

    console.log(1)
    setoperator("add")
    
    setnumA("B")
    setcarrier("")

  } else if(carrier === " = ") {
    console.log("=")
    let num =0
    if(operator === "add"){
        num = num1 + num2
    }else if(operator === "subtract"){
        num = num1 - num2
    }else if(operator === "multiply"){
        num = num1 * num2
    }else if(operator === "divide"){
        num = num1 / num2
    }
    
    console.log(num)
    setnum1(num)
    setdisplay(num)
    setnum2(0)
    setoperator(()=>(a,b)=> {})
    setcarrier("")

  } else if (Number.isInteger(carrier)||carrier ===".") {

    if(numA === "A"){
      console.log("a")
      let holder =parseInt(`${num1}${carrier}`)
      setnum1(holder);
      setdisplay(holder);

      
      console.log(holder);
      setcarrier("")

    }else{
     let holder = parseInt(`${num2}${carrier}`)
      setnum2(holder);
      setdisplay(holder);
      
      console.log("b")
      console.log(num2)
      setcarrier("")
        
    }

 }
}
superIf(carrier)
  
  return (
    <div className="App">
      <Display label = {display} />
      <div id="div1" className="divRow">
        <Button id ="aa" label = " Clear " func={setcarrier}/>
        <Button id ="ab" label = " C " func={setcarrier}/>
        <Button id ="ac" label = " / " func={setcarrier}/>
      </div>
      <div id="div2" className="divRow">
        <Button id ="ba" label = {9} func={setcarrier}/>
        <Button id ="bb" label = {8} func={setcarrier}/>
        <Button id ="bc" label = {7} func={setcarrier}/>
        <Button id ="bd" label = " * " func={setcarrier}/>
      </div>
      <div  id="div3" className="divRow">
        <Button id ="ca" label = {6} func={setcarrier}/>
        <Button id ="cb" label = {5} func={setcarrier}/>
        <Button id ="cc" label = {4} func={setcarrier}/>
        <Button id ="cd" label = " - " func={setcarrier}/>
      </div>
      <div id="div4" className="divRow">
        <Button id ="da" label = {3} func={setcarrier}/>
        <Button id ="db" label = {2} func={setcarrier}/>
        <Button id ="dc" label = {1} func={setcarrier}/>
        <Button id ="dd" label = " + " func={setcarrier} />
      </div>
      <div id="div5" className="divRow">
        <Button id ="ea" label = {0} func={setcarrier}/>
        <Button id ="eb" label = "." func={setcarrier}/>
        <Button id ="ec" label = " = " func={setcarrier}/>
      </div>

    </div>
  );










  
}

export default App;

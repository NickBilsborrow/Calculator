
import './App.css';
import {Button,  Display}from './Buttons.js'

function App() {
  return (
    <div className="App">
      <Display  />
      <div id="div1" className="div">
        <Button id="aa" label = " Clear " />
        <Button id="ab" label = " C " />
        <Button id="ac" label = " / " />
      </div>
      <div id="div2" className="div">
        <Button id="ba" label = {9} />
        <Button id="bb" label = {8} />
        <Button id="bc" label = {7} />
        <Button id="bd" label = " * " />
      </div>
      <div  id="div3" className="div">
        <Button id="ca" label = {6} />
        <Button id="cb" label = {5} />
        <Button id="cc" label = {4} />
        <Button id="cd" label = " - " />
      </div>
      <div id="div4" className="div">
        <Button id="da" label = {3} />
        <Button id="db" label = {2} />
        <Button id="dc" label = {1} />
        <Button id="dd" label = " + "  />
      </div>
      <div id="div5" className="div">
        <Button id="ea" label = {0}/>
        <Button id="eb" label = "."/>
        <Button id="ec" label = " = "/>
      </div>

    </div>
  );
}

export default App;

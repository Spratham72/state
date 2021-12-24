import './App.css';
import React from 'react';
import {useState} from "react";
function App() {
  const [count,current]=useState(0);
  const  CounterChange=(value)=>{
    if(value==1 || value==-1)
        current(count+value)
    else
    current(count*value);
  }
  return (
    
    <div className="App">
      <h3>Counter {count}</h3>
      <button onClick={()=>CounterChange(1)}>Add</button>
      <button onClick={()=>CounterChange(-1)}>Subtract</button>
      <button onClick={()=>CounterChange(2)}>Double</button>
    </div>
  );
}

export default App;

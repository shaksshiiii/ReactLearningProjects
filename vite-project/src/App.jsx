import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)

  // let counter=5;

  const addValue=()=>{
    setCounter(counter+1);
  }

  const lessValue=()=>{
    if(counter>0){
      counter=counter-1;
      setCounter(counter)
    }
    else{
      counter=0;
    }
    
  }
  return (
    <>
    
      <h1>Vite + React</h1>
      <h2>counter value:{counter}</h2>
      <button
      onClick={addValue}
      >add value</button>
      <br />
      <br />
      <button
      onClick={lessValue}
      >decrease value</button>
      
    </>
  )
}

export default App

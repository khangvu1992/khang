import React, { useState } from 'react';
import axios from 'axios'

function App() {
  const [arr, setarr] = useState("");
  const [arr2, setarr2] = useState([""]);
  const baseUrl = 'http://localhost:3001/notes'

  const getAll = ()=>{
     const lay = axios.get(baseUrl)
     const nonExisting = {
      
      content: 'This note is not saved to server',
      
    }
    return lay.then(response => response.data())
  }

  const m =getAll()
  console.log(m)

  const drop=(e)=>{
    const a= e.target.value
    console.log(a)
   setarr(a)
   
  
   
   
  }
  

  const clich = (e)=>{
    e.preventDefault();

    setarr2(arr2.concat(arr))
    setarr("")
     console.log(arr2)}
  return (
    <div >
       <form >
        <input type="text" onChange={drop} value={arr} />
        <label for="">com mit xem nao</label>
        <input type="file" /> 
        <button type="submit" onClick={clich} >sumit</button>
        <ul >
          
        {arr2.map(x=>( <li>{x}</li>)) }
        </ul>
    
      </form>
    </div>
  );
}

export default App;

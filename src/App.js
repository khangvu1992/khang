import React, { useState } from 'react';


function App() {
  const [arr, setarr] = useState("");

  const drop=(e)=>{
    const a= e.target.value
    console.log(a)
   setarr(a)
   
  
   
   
  }
  const [arr2, setarr2] = useState([""]);

  const clich = (e)=>{
    e.preventDefault();

    setarr2(arr2.concat(arr))
    setarr("")
     console.log(arr2)}
  return (
    <div >
       <form >
        <input type="text" onChange={drop} value={arr} />
        <label for="">thu lam xem</label>
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

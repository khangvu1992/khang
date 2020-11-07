import React, { useState ,useEffect} from 'react';
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState("")
  const [notes1, setNotes1] = useState([])

 
    // axios.get('http://localhost:3000/ten').then(res => setNotes1(res.data.he) )


  
  const onChange1 = (e)=>{
    setNotes(e.target.value)
  }
  
  const onClick1 = ()=>{

    let moi = { he: notes  }
    axios.post('http://localhost:3000/ten',moi).then(res => {
    setNotes1(notes1.concat( res.data))
    
  })
    setNotes("")
    
  }
  return (
    <div >
      <input type="text" onChange={onChange1}  value={notes}/>
     ghgh
     <button onClick={onClick1}>nhap</button>
      {notes1.map(a=>
        <li>{a.he}</li>
        )}
    </div>
  );
}

export default App;

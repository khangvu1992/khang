import React, { useState ,useEffect} from 'react';
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3000/ten')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
 
  return (
    <div >
     ghgh
      {notes.he}
    </div>
  );
}

export default App;

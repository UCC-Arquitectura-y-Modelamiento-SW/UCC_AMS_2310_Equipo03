import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  /*const [personajes, setPersonajes] =useState([])*/
  useEffect(() => {
    axios.get('https://oz372alqvuecpbi7vacclnlrky0meela.lambda-url.us-east-1.on.aws/')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Marvel</h1>
    </div>
  );
}

export default App;

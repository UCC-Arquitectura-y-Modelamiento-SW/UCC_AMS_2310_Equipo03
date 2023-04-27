import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {

  const [creadores, setCreadores]=useState([])

  useEffect(()=> {
    axios.get('https://gateway.marvel.com:443/v1/public/creators?ts=1&apikey=dcc75992fb47267a4923e97235321ed9&hash=ccd1b7e46c5461b95d269c39e57f3e37').then(res=>{
        setCreadores(res.data.data.results)
    }).catch(error=>console.log(error))
  },[])


  console.log(creadores)

  return (
    <div className="App">
      <div className="container">
        <h1>Lista de Creadores de Marvel</h1>
        <div className="row">
          {creadores.map(creador => (
            <div key={creador.id} className="col-md-6 col-lg-4">
              <div className="card mb-3">
                <img src={creador.thumbnail.path + "." + creador.thumbnail.extension} className="card-img-top" alt={creador.fullName} />
                <div className="card-body">
                  <h5 className="card-title">{creador.fullName}</h5>
                  <ul className="list-group list-group-flush">
                    {creador.comics.items.map((comic, index) => (
                      <li key={index} className="list-group-item">
                        <a href={comic.resourceURI}>{comic.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default App;
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import marvelLogo from "./assets/marvel-logo.jpg";
import logoUsuario from "./assets/logo-usuario.png";
import marvelSub from "./assets/marvel-sub.png";
import searchLogo from "./assets/search.png";
 
function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios.get('https://kgqhzontqtvuylzwsbnxd4tsxi0fintf.lambda-url.us-east-1.on.aws/')
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
 
  return (
    <div className="container-fluid px-0">
      <div className="container-fluid px-0">
        <div className="header">
          <div id='elem'>
            <img id='logousu' src={logoUsuario} alt="Logo Usuario" className="img-fluid" />
            <h1 id='text1' className="d-inline-block ml-2 mb-0 text-white">ANDREW</h1>
          </div>
          <div id='elem' className='elem1'>
            <img src={marvelLogo} alt="Marvel Logo" className="img-fluid" />
          </div>
          <div id='elem'>
            <img src={marvelSub} alt="Marvel Unlimited Subscribe" className="img-fluid" />
            <h1 id='text2' className="d-inline-block ml-10 mb-0 text-white">MARVEL UNLIMITED SUBSCRIBE</h1>
          </div>
          <div id='elem'>
            <img id='searchl' src={searchLogo} alt="Search Logo" className="img-fluid" />
          </div>
        </div>

        <nav className="navbar navbar-expand-md navbar-dark bg-marvel py-0">
          <div className="container">
            <div className="" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">CHARACTERS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">COMICS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">SERIES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">STORIES</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <h1 className="text-center mt-5 mb-5">Marvel Characters</h1>
      <div className="container">
        {characters.map(character => (
          <div key={character.id} className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className="card-img" alt={character.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">{character.description}</p>
                  <ul>
                    <h5>Series del personaje: </h5>
                    {character.series.items.map(series => (
                      <li key={series.name}><a href={series.resourceURI}>{series.name}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
}
 
export default App;
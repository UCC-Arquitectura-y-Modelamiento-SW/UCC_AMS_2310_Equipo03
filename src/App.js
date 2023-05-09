import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import marvelLogo from "./assets/marvel-logo.jpg";
import logoUsuario from "./assets/logo-usuario.png";
import marvelSub from "./assets/marvel-sub.png";
import searchLogo from "./assets/search.png";

function App() {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    axios.get('https://oz372alqvuecpbi7vacclnlrky0meela.lambda-url.us-east-1.on.aws/')
      .then(response => {
        setComics(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid px-0">
      <div className="container-fluid px-0">
        <div className="header py-3">
          <div className="row justify-content-between align-items-center mx-0">
            <div id='elem' className="col-md-auto">
              <img src={logoUsuario} alt="Logo Usuario" className="img-fluid" />
              <h1 className="d-inline-block ml-2 mb-0 text-white">KEVIN</h1>
            </div>
            <div id='elem' className="col-md-auto d-flex align-items-center">
              <img src={marvelLogo} alt="Marvel Logo" className="img-fluid" />
            </div>
            <div id='elem' className="col-md-auto d-none d-md-block">
              <img src={marvelSub} alt="Marvel Unlimited Subscribe" className="img-fluid" />
              <h1 className="d-inline-block ml-2 mb-0 text-white">MARVEL UNLIMITED SUBSCRIBE</h1>
            </div>
            <div id='elem' className="col-md-auto d-flex align-items-center justify-content-end">
              <img src={searchLogo} alt="Search Logo" className="img-fluid" />
            </div>
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

      <h1 className="text-center mt-5 mb-5">Marvel Comics</h1>
      <div className="row gx-2 gx-lg-3">
        {comics.map((comic) => (
          <div key={comic.id} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <div className="card-body p-1">
                <h6 className="card-title fw-bold">{comic.title}</h6>
                <p className="card-text mb-1">
                  <strong>Titulo: </strong>
                  {comic.title}
                </p>
                <p className="card-text mb-1">
                  <strong>Descripcion: </strong>
                  {comic.description}
                </p>
                <p className="card-text mb-1">
                  <strong>Creadores: </strong>
                  {comic.creators.items.map((creator) => creator.name).join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
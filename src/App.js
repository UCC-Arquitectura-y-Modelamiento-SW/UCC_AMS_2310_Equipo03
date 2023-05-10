import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import marvelLogo from "./assets/marvel-logo.jpg";
import logoUsuario from "./assets/logo-usuario.png";
import marvelSub from "./assets/marvel-sub.png";
import searchLogo from "./assets/search.png";

function App() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    axios.get('https://rm4afqiyjeisqizhyarhngfole0lyulk.lambda-url.us-east-1.on.aws/')
      .then(response => {
        setStories(response.data.data.results);
        console.log(response.data.data.results)
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
            <h1 id='text1' className="d-inline-block ml-2 mb-0 text-white">FAMILIA</h1>
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

      <h1 className="text-center mt-5 mb-5">Marvel Stories</h1>
      <div class="container">
        <h1>Stories</h1>
        <table class="table">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Categoria</th>
              <th>Serie</th>
              <th>Titulo Original</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((story) => (
              <tr key={story.id}>
                <td>{story.title}</td>
                <td>{story.type}</td>
                <td>
                  {story.series.items.map((item) => (
                    <div key={item.resourceURI}>{item.name}</div>
                  ))}
                </td>
                <td>{story.originalIssue.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default App;
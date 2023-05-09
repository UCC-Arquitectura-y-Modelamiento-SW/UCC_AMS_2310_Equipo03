import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function App() {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    axios.get('https://ol3vxlqnunbxuh4k2on7wahgom0lzohs.lambda-url.us-east-1.on.aws/')
      .then(response => {
        console.log(response.data.data.results)
        setComics(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Marvel</h1>
      <div id="page-content" className="page-content">
        <Row>
          {comics.map(comic => (
            <Col md={3} key={comic.id}>
              <Card>
                <Card.Img variant="top" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                <Card.Body>
                  <Card.Title>{comic.title}</Card.Title>
                  <Card.Text>{comic.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default App;

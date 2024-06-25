import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardTasarim({ name, image, place, shot, followers, follow }) {
  return (
    <div>
      {/* İlk kart */}
      <Card style={{ width: '22rem', border: '2px solid #000', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Place:</strong> {place} <br />
            <strong>Shot:</strong> {shot} <br />
            <strong>Followers:</strong> {followers}
          </Card.Text>
          <Button variant="primary">{follow}</Button>
        </Card.Body>
      </Card>

      {/* İkinci kart (aynı bileşeni kopyalayarak) */}
      <Card style={{ width: '22rem', border: '2px solid #000', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Place:</strong> {place} <br />
            <strong>Shot:</strong> {shot} <br />
            <strong>Followers:</strong> {followers}
          </Card.Text>
          <Button variant="primary">{follow}</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '22rem', border: '2px solid #000', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Place:</strong> {place} <br />
            <strong>Shot:</strong> {shot} <br />
            <strong>Followers:</strong> {followers}
          </Card.Text>
          <Button variant="primary">{follow}</Button>
        </Card.Body>
      </Card>

      
    </div>
  );
}

export default CardTasarim;

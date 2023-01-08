import React from 'react';
import {Button, Card} from "react-bootstrap";
import "./Style.css"



  function SeriesCard({ title, author, img, rate, releaseDate }) {
 
    
  return (
    <Card className='card' style={{
      width:"18rem"
      
    }}>
      <Card.Img variant="top" src={img}
      style={{
        width:"100%",
        height:"428px",
        objectFit:"cover",
      }}
      />
      <Card.Body style={{
        height:"300px"
      }}>
        <Card.Header className='text-info'> {author} </Card.Header>
        <Card.Title className='text-danger'> {title} </Card.Title>
        <br />
        <Card.Subtitle>ReleaseDate : {releaseDate} </Card.Subtitle>
        <br/>
        <Card.Subtitle className='text-warning'>Rate : {rate} </Card.Subtitle>
        <br/>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  
  );
}

export default SeriesCard;
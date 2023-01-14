import React from 'react';
import "./Style.css";
import {useParams} from "react-router-dom";
import { data } from "../data";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import "./Style.css";



function WatchPage() {

    const params = useParams() 
    const product= data.find((elt) => elt.id === params.id)
    console.log("product",product);

  return (
    <div className="Watch-container">
      <div className="Watch-movie">
        <Card className="bg-dark text-white">
          
          <Card.ImgOverlay>
            <Card.Title>{product.title}</Card.Title>
            
            <Card.Text></Card.Text>
          </Card.ImgOverlay>
        </Card>
        <ReactPlayer url={product.src} className="player" />
        <br/>
        <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum at dolores doloribus animi deserunt enim numquam hic voluptates, adipisci itaque reprehenderit porro tempore eaque aperiam laudantium optio esse tempora.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, sed ea omnis nobis laboriosam, est nostrum sint, aliquam facilis facere sit? Ratione rerum, eos natus beatae ipsa error expedita facilis.
            </Card.Text>
      </div>
    </div>
  );
}

export default WatchPage;
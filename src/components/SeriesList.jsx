import React, {useState} from "react";
import "./Style.css";
import SeriesCard from './SeriesCard'; 
import {Button, Modal, Form} from 'react-bootstrap';

function SeriesList({ data, search, rating, setSeries }) {
  const [show, setShow] = useState(false);
  const [newSeries, setNewSeries] = useState({})
  


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange=(e)=>{
    setNewSeries({ ...newSeries, [e.target.name] : e.target.value});
  }
  const handleSave = ()=>{
     setSeries([
      ...data, newSeries
    ]);
        handleClose();

  };
  return (
    <div className='books-list-container'>
     
         <h1>Series List</h1>
        <br/>
        <br/>
         <Button  onClick={handleShow}>
        Add Series
      </Button>
       <br/>
        <div className="series-items"> 
         {
        data 
         ?.filter((elt)=>
        elt.title.toLowerCase().includes(search.toLowerCase())
        )
         .filter((elt) => 
         rating ? elt.rate == rating : elt
         )
          .map((Series) =>(
          <SeriesCard {...Series}/>
        ))}

    </div>
    <Modal show={show} onHide={handleClose} animation="true">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Add new Series:</Modal.Title>
        </Modal.Header>
        <Modal.Body>

       
        <Form onChange={(e) => handleChange(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-primary">Series Title</Form.Label>
        <Form.Control type="Text"
         placeholder="add the title of the series" 
         name="title"
         />
         
          
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text"
                      placeholder="add the author's name"
                      name="author"
                      />
                       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>Series image</Form.Label>
        <Form.Control type="text"
                      placeholder="add the image url" 
                      name="img"
                      />
      </Form.Group>
      <Form.Group className="mb-33" controlId="formBasicCheckbox">
      <Form.Label>Series Rate</Form.Label>
        <Form.Control type="number"
                      min={1}
                      max={10}
                      placeholder="add the series rate"
                      name="rate"
                      />
      </Form.Group>
      <Form.Group className="mb-333" controlId="formBasicsCheckbox">
      <Form.Label>Release Date</Form.Label>
        <Form.Control type="date"
                       placeholder="add the releaseDate of the series "
                       name="releaseDate"
                       />
                      
      </Form.Group>
    </Form>

          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="button" onClick={ handleSave }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
     );
 }

  export default SeriesList; 
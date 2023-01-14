import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


function NavBar({ setSearch, setRating }) {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
    return (
      <Navbar className=' mb-2 bg-info text-dark' fixed="top" expand="lg"  variant="light"  >
      <Container fluid>
        <Navbar.Brand className='text-danger' href="#" >Series House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav className='text-dark' > 
            <button>
            <Link to="home" className="link">
                  Home
                </Link> 
                </button>
            </Nav>
            
            <Nav className='text-dark' > 
            <button>
            <Link to="Series" className="link">
                  Series
                </Link>
                </button>
            </Nav>
    
            <ReactStars
    count={10}
    onChange={ratingChanged}
    size={25}
    activeColor="#ffd700"
  />
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event)=>{
                setSearch(event.target.value);
              }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
}
    
  
  
  export default NavBar;
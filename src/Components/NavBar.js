import React from 'react';
import {Navbar,Container,Button,Form,FormControl} from 'react-bootstrap' 

function NavBar({inputSearch, setInputSearch, rate, setRate}) {

return (
<div>
<Navbar bg="light" expand="lg">
    <Container style={{backgroundColor:"#2874A6", marginBottom:'45px', height:'100px'}} fluid>
        <Navbar.Brand href="#">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex">
            <FormControl 
            type="search"
            placeholder="Enter movie title"
            className="me-2"
            aria-label="Search"
            value={inputSearch}

            onChange={(event)=>
                setInputSearch(event.target.value)}
            />
            <Button variant="outline-success" style={{backgroundColor:'white'}}>Search</Button>
        </Form>
        
        </Navbar.Collapse>
        
    </Container>
</Navbar>
</div>
)
}

export default NavBar;

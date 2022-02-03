import React from 'react';


import {Container, Row, Col, Button} from "react-bootstrap"
import { useMatch, useNavigate } from 'react-router-dom';
import { moviesData } from './../Constant/data';
function MovieDescrip() {
    const match = useMatch("/:id")
    const navigate=useNavigate()
    const movie = moviesData.find(el=>el.id==match.params.id)
    console.log(movie);

    return ( 

        <div>   
    
                <Container>
                    <Row>
                        <Col sm={8}>
                        <div style={{marginTop:"100px", width:"360px"}}>
                        <h1>Description of: {movie.title}</h1>
                        {movie.description}
                        </div>
                        </Col>
                        <Col sm={4}>
                    
                        <iframe style={{paddingRight:"350px", marginTop:"100px", width:"760px", height:"300px"}} src={movie.trailer}></iframe>

                        </Col>
                    
                    </Row>
                </Container>
                <div style={{marginTop:"100px"}}>
                    <Button onClick={()=>navigate('/')} variant="secondary">Go back Home</Button>{' '}
                </div>
        </div>
    );
    }

export default MovieDescrip;

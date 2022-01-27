import React from 'react';
import { Card } from "react-bootstrap"
import { Rate } from 'antd';
function MovieCard({ movies }) {
    return ( 
    <div>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movies.posterUrl} />
    <Card.Body>
        <Card.Title>{movies.title}</Card.Title>
        <Card.Text>{movies.description}</Card.Text>
        <Rate disabled defaultValue={movies.rate} />
        <Card.Text><a href={movies.trailer} target={"blanck"}>{movies.trailer}</a></Card.Text>

    </Card.Body>
</Card>
    </div>);
}

export default MovieCard;

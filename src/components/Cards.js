import React, { Component } from 'react';
import { Card,Button } from "react-bootstrap";

class Cards extends Component {
    render() {
        return (
            <div>
                <Card style={{  width: "20rem" }}>
                    <Card.Img variant="bottom" src="holder.js/100px100" />
                    <Card.Body>
                        <Card.Title className="Libby">Card Title</Card.Title>
                        <Card.Text className="Card">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Cards;
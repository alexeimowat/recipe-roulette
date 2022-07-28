import React from "react";
import DOMPurify from "dompurify";
import './index.css';

// import { Card } from "react-bootstrap/Card";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

class DisplayRecipe extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ width: '40rem', margin: 'auto', backgroundColor: '#F5F5F5', marginBottom: '30px' }}>
                <Card.Img varient="top" src={this.props.image}/>
                {/* <Card.ImgOverlay >
                    <Button style={{ right: '0', bottom: '0' }}>Save</Button>
                </Card.ImgOverlay> */}
                <Card.Body>
                    <Card.Title style={{ color: '#993955', fontWeight: 'bolder' }}>
                        {this.props.title} <Button style={{ float: 'right' }}>Save</Button>
                    </Card.Title>
                    <Card.Text style={{ fontStyle: 'italic' }}>
                        Serves {this.props.servingSize}, Ready in {this.props.readyInMinutes} minutes</Card.Text>
                    <Card.Subtitle style={{ color: "#AE76A6" }}>Ingredients</Card.Subtitle>
                    <Card.Text>
                        {Array.from(this.props.ingredients).map(ingredient => (
                            <li key={Math.random()}>{ingredient}</li>
                        ))}    
                    </Card.Text>
                    <Card.Subtitle style={{ color: "#AE76A6" }}>Steps</Card.Subtitle>
                    <Card.Text>
                        {Array.from(this.props.instructions).map((instructions, index) => (
                            <li key={index}>{instructions}</li>
                        ))}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default DisplayRecipe;
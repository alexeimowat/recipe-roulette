import React from "react";
import './index.css';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import DeleteSavedRecipe from "../SavedRecipes/DeleteSavedRecipe";

class DisplayRecipe extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ width: '40rem', margin: 'auto', backgroundColor: '#F5F5F5', marginBottom: '30px' }}>
                <Card.Img varient="top" src={this.props.image}/>
                <Card.Body>
                    <Card.Title style={{ color: '#993955', fontWeight: 'bolder' }}>
                        {this.props.title} <Button style={{ float: 'right' }}>Save</Button>
                        {/* Conditionally render the delete button. We only want to show it when 
                        user is viewing saved recipes. This is passed as a prop via the parent */}
                        {this.props.isSaved ? 
                            <DeleteSavedRecipe recipeid={this.props.recipeID}/>
                                    : null}
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
import React from "react";
// import './index.css';
import styles from './index.module.scss';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import DeleteSavedRecipe from "../SavedRecipes/DeleteSavedRecipe";
import SaveRecipe from "../SaveRecipe";

/**
 * Handles the displaying and organizing of a recipe. This is the only class that handles this and as such is used 
 * in a couple of different components. 
 * Logic of saving or deleting recipes is abstracted to other classes and rendered by this class, keeping this simple
 * 
 */
class DisplayRecipe extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.displayContainer}>
                <p className="test">Hello</p>
            <Card style={{ width: '40rem', margin: 'auto', backgroundColor: '#F5F5F5', marginBottom: '30px' }}>
                <Card.Img varient="top" src={this.props.image}/>
                <Card.Body>
                    <Card.Title style={{ color: '#993955', fontWeight: 'bolder' }}>
                        {this.props.title} 
                        {/* Conditionally render the delete button or the save. We only want to show it when 
                        user is viewing saved recipes, and only show the save button when viewing new recipes. 
                        This is passed as a prop via the parent */}
                        {this.props.isSaved ? 
                            <DeleteSavedRecipe recipeid={this.props.recipeID} applyChg={this.props.applyChg}/>
                                    : 
                            <SaveRecipe recipeDetails={this.props}/>}
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
            </div>
        )
    }
}

export default DisplayRecipe;
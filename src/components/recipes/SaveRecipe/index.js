import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

class SaveRecipe extends React.Component {
    constructor(props) {
        super(props);

        this.saveRecipe = this.saveRecipe.bind(this);
        this.prepareRecipe = this.prepareRecipe.bind(this);
    }

    saveRecipe(formattedInstructions, formattedIngredients) {
        let recipe = this.props.recipeDetails;
        // console.log(recipe.title);
        axios.post("http://localhost:3030/save",
            {
                data: {
                    // title: "Test Title",
                    // time: "50",
                    // servings: "2",
                    // recipeid: 123455,
                    // picture: "hello.jpg",
                    // meal: "test",
                    // instructions: '{"Hello"}',
                    // ingredients: '{"Hi"}',
                    // gf: false,
                    // cuisine: "test"
                    title: recipe.title,
                    time: recipe.readyInMinutes,
                    servings: recipe.servingSize,
                    recipeid: recipe.recipeID,
                    picture: recipe.image,
                    meal: 'test',
                    instructions: formattedInstructions,
                    ingredients: formattedIngredients,
                    gf: false,
                    cuisine: 'test'
                }
            })
            .then((response) => {
                console.log("Did we make it?")
            })
            .catch((error) => {
                console.log(error)
            })
        // console.log("Save the recipe with ID: " + this.props.recipeDetails.recipeID);

    }

    /** We need to prepare the 2 arrays in the recipe for Postgresql insert */
    prepareRecipe() {
        let originalIng = this.props.recipeDetails.ingredients;
        let ingredientModified = '{"';
        for(let i=0; i<originalIng.length-1; i++) {
            ingredientModified = ingredientModified + originalIng[i] + '", "';
        }
        ingredientModified = ingredientModified + originalIng.splice(-1) + '"}';

        let originalInst = this.props.recipeDetails.instructions;
        let instructionsModified = '{"';
        for(let j=0; j<originalInst.length-1; j++) {
            instructionsModified = instructionsModified + originalInst[j] + '", "'
        }
        instructionsModified = instructionsModified + originalInst.splice(-1) + '"}';

        this.saveRecipe(originalIng, originalInst);

    }

    render() {
        return (
            <Button style={{ float: 'right' }} onClick={this.prepareRecipe}>Save</Button>
        )
    }
}
export default SaveRecipe;
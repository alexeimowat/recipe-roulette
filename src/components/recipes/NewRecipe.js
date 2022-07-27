/* This component issues a request from the Spoonacular API to get a random recipe and 
displays it to the screen
*/
// imports
import React from 'react';
import axios, { Axios } from 'axios';

class NewRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {ingredient: " "};

        this.getRecipe = this.getRecipe.bind(this);
    }
    
    /* Gets a random recipe from Spoonacular API and updates the state to show the new ingredient
    */
    getRecipe() {
        // console.log("Calling getRecipe");
        // console.log("Current Value of state:");
        // console.log(this.state.ingredient);
        axios.get('https://api.spoonacular.com/recipes/random?apiKey=a1d424f72e474e8db3dec5e0baf85ba3')
            .then((response) => {
              console.log(response);
              this.setState({ingredient: response.data.recipes[0].extendedIngredients[0].original})
            })
           .catch((error)=>{
              console.log(error);
           }); 
    }  
    
    render() {
        return (
            <div>
                <p>{this.state.ingredient}</p>
                <button onClick={this.getRecipe}>
                    New Recipe
                </button>
            </div>
        );
    }
}

export default NewRecipe;
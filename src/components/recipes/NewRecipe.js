/* This component issues a request from the Spoonacular API to get a random recipe and 
displays it to the screen
*/
// imports
import React from 'react';
import axios, { Axios } from 'axios';

// constants
const initialState = {
    ingredient: "", // just for testing output, not in final code
    recipeImage: "",
    recipeTitle: "",
    ingredientList: "",
    instructions: ""
}

const spoonacularAddr = "https://api.spoonacular.com/recipes/random?apiKey=a1d424f72e474e8db3dec5e0baf85ba3";
const rapidAPIAddr = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random";
const rapidAPIKey = "e80a8a6f02msh7a2a36a879b4d5bp1e6ce2jsn80ba9331c81b";

class NewRecipe extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {ingredient: '', 
                        recipeImage: '',
                        recipeTitle: '', 
                        ingredientList: ['']};

        this.getRecipe = this.getRecipe.bind(this);
        // this.ingredientsElement = this.ingredientsElement.bind(this);
        this.clearState = this.clearState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /* Gets a random recipe from Spoonacular API and updates the state to show the new ingredient
    */
    getRecipe() {
        // console.log("Calling getRecipe");
        // console.log("Current Value of state:");
        // console.log(this.state.ingredient);
        axios.get(spoonacularAddr)
            .then((response) => {
                console.log(response.data.recipes[0]);
                let recipeData = response.data.recipes[0];
                console.log(recipeData.extendedIngredients.length);

                let tempAr = [];
                for (let i = 0; i<recipeData.extendedIngredients.length; i++) {
                    tempAr[i] = recipeData.extendedIngredients[i].original;
                }

                this.setState({ingredient: recipeData.extendedIngredients[0].original, 
                                recipeImage: recipeData.image,
                                recipeTitle: recipeData.title,
                                ingredientList: tempAr
                                });
            })
           .catch((error)=>{
              console.log(error);
            }); 
    }
    
    clearState() {
        this.setState({...initialState})
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.clearState();
        this.getRecipe();
        
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <img src={this.state.recipeImage} alt="image" width="300" height="200"/>
                    <h1>{this.state.recipeTitle}</h1>
                    {/* <p>{this.state.ingredientList[0]}</p> */}
                    <p>{this.state.ingredientList[0]}</p>
                    <p>{this.state.ingredientList[1]}</p>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            // <div>
            //     <h1>{this.state.recipeTitle}</h1>
            //     <p>{this.state.ingredient}</p>
            //     {/* <div>
            //         {this.state.instructions}
            //     </div> */}
            //     <button onClick={this.getRecipe}>
            //         New Recipe
            //     </button>
            // </div>
        );
    }
}

export default NewRecipe;
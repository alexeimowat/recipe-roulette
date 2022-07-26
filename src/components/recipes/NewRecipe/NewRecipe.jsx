// imports
import React from 'react';
import axios, { Axios } from 'axios';
import DOMPurify from 'dompurify';
import DisplayRecipe from '../DisplayRecipe/DisplayRecipe';
import { Button } from "react-bootstrap";

// constants
const initialState = {
    didFetch: false,
    recipeID: 0, // just for testing output, not in final code
    recipeImage: "",
    recipeTitle: "",
    ingredientList: "",
    instructions: "",
    servingSize: "",
    readyInMinutes: "",
    recipeSummary: ""
}
const spoonacularAddr = "https://api.spoonacular.com/recipes/random?apiKey=a1d424f72e474e8db3dec5e0baf85ba3";
// const rapidAPIAddr = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random";
// const rapidAPIKey = "e80a8a6f02msh7a2a36a879b4d5bp1e6ce2jsn80ba9331c81b";

/**
 * NewRecipe class is responsible for creating an Axios get request to the Spoonacular API. 
 *  - Once a response has been accepted, we parse through the important data we care about and store them in the local
 *      state of this component. 
 *  - The render method then calls the DisplayRecipe component which takes in NewRecipe's state as its own props 
 *      and displays it for the user
 *  - NewRecipe will also be responsible for applying parameters for the request which will be added in a future 
 *      update
 */
class NewRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {didFetch: false,
                        recipeID: 0, 
                        recipeImage: "",
                        recipeTitle: "", 
                        ingredientList: "",
                        instructions: "",
                        servingSize: "",
                        readyInMinutes: "",
                        recipeSummary: ""    
                    };

        this.getRecipe = this.getRecipe.bind(this);
        this.clearState = this.clearState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getRecipe();
    }

    /* 
    Gets a random recipe from Spoonacular API and updates the state and its variables to reflect the response data
    */
    getRecipe() {
        axios.get(spoonacularAddr)
            .then((response) => {
                console.log(response.data.recipes[0]);
                // get the data we care about from the response
                let recipeData = response.data.recipes[0];

                // create a temporary list to store the instructions before setting the state again
                // also sanitize the text because some of the steps for recipes have wierd tags
                let theInstructions = [];
                for (let i = 0; i<recipeData.analyzedInstructions[0].steps.length; i++) {
                    let inst = DOMPurify.sanitize(recipeData.analyzedInstructions[0].steps[i].step);
                    theInstructions[i] = inst;
                }
                // a list representing the ingredients, we create a html list from the response
                let displayIngredientsElement = [];
                for (let i = 0; i<recipeData.extendedIngredients.length; i++) {
                    displayIngredientsElement[i] = recipeData.extendedIngredients[i].original;
                    // displayIngredientsElement = displayIngredientsElement + "<li>" + recipeData.extendedIngredients[i].original + "</li>";
                }
                // update the state variables based on the response
                this.setState({didFetch: true,
                                recipeID: recipeData.id, 
                                recipeImage: recipeData.image,
                                recipeTitle: recipeData.title.toUpperCase(),
                                ingredientList: displayIngredientsElement,
                                instructions: theInstructions,
                                servingSize: recipeData.servings,
                                readyInMinutes: recipeData.readyInMinutes,
                                recipeSummary: recipeData.summary
                                });
            })
           .catch((error)=>{
              console.log(error);
            }); 
    }
    
    /* Resets the state before getting a new response from the API. This is to ensure 
    a clear and initial state for no chance of carried over data from previous responses
    */
    clearState() {
        this.setState({...initialState})
    }

    /* Once a user requests a new random recipe, we clear the state and then get a recipe via 
    an Axios get request
    */
    handleSubmit = e => {
        e.preventDefault();
        
        this.clearState();
        this.getRecipe();
        console.log(this.state.instructions);
        
    }
    
    render() {
        return (
            <div className="container h-80 mt-3 mb-5 ml-5 mr-5">
                <div style={{float: 'right'}}>
                    <form onSubmit={this.handleSubmit}>

                        <Button type='submit' size='lg' style={{float: 'right'}}>New Recipe!</Button>
                    </form> 
                </div>
                <div className="row">
                
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">                
                        {this.state.didFetch ? 
                        <DisplayRecipe title={this.state.recipeTitle}
                                            image={this.state.recipeImage}
                                            ingredients={this.state.ingredientList}
                                            instructions={this.state.instructions}
                                            servingSize={this.state.servingSize}
                                            readyInMinutes={this.state.readyInMinutes}
                                            recipeID={this.state.recipeID}
                                            isSaved={false}
                                            getNew={this.hand}/>
                        : null}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default NewRecipe;
/* This component issues a request from the Spoonacular API to get a random recipe and 
displays it to the screen
*/
// imports
import React from 'react';
import axios, { Axios } from 'axios';

const test = "hello, I am a const";
class NewRecipe extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {ingredient: '', 
                        recipeImage: '',
                        recipeTitle: '', 
                        ingredientList: ['']};

        this.getRecipe = this.getRecipe.bind(this);
        this.ingredientsElement = this.ingredientsElement.bind(this);
    }
    
    ingredientsElement(responseArray) {
        console.log(responseArray);

        // First we want to replace the old recipe with a blank array
        let newEmpty = [];
        this.setState({
            ingredientList: [...this.state.ingredientList, newEmpty]
        });

        // next we want to add all the ingredients to a temp array and change the state to 
        // reflect this new array
        let tempArray = [];
        // console.log("Printing all items:");
        for (let i=0; i<responseArray.length; i++) {
            // console.log(responseArray[i].original);
            tempArray[i] = responseArray[i].original;
        }
        // console.log("The temp array");
        // console.log(tempArray);

        this.setState({
            ingredientList: [...this.state.ingredientList, tempArray]
        });
        console.log(this.state.ingredientList);
    }

    /* Gets a random recipe from Spoonacular API and updates the state to show the new ingredient
    */
    getRecipe() {
        // console.log("Calling getRecipe");
        // console.log("Current Value of state:");
        // console.log(this.state.ingredient);
        axios.get('https://api.spoonacular.com/recipes/random?apiKey=a1d424f72e474e8db3dec5e0baf85ba3')
            .then((response) => {
                console.log(response.data.recipes[0]);
                let recipeData = response.data.recipes[0];
                this.setState({ingredient: recipeData.extendedIngredients[0].original, 
                                recipeImage: recipeData.image,
                                recipeTitle: recipeData.title,
                                });
                this.ingredientsElement(recipeData.extendedIngredients);
                
                // console.log(this.state.ingredientList);
            })
           .catch((error)=>{
              console.log(error);
            }); 
        // console.log(this.state.ingredientList);
    }  
    
    render() {
        return (
            <div>
                <h1>{this.state.recipeTitle}</h1>
                <img src={this.state.recipeImage} alt="image" width="300" height="200"/>
                <p>{this.state.ingredient}</p>
                {/* <div>
                    {this.state.instructions}
                </div> */}
                <button onClick={this.getRecipe}>
                    New Recipe
                </button>
            </div>
        );
    }
}

export default NewRecipe;
import React from "react";
import axios from "axios";
import DisplayRecipe from "../../DisplayRecipe";

/**
 * Class displays all saved recipes from the database. 
 * Once the component mounts it instantly sends a request to server to query all of the saved recipes, displaying 
 * them to the screen via the DisplayRecipe component
 */
class DisplaySavedRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fetchedRecipes: []};

        this.getRecipe = this.getRecipe.bind(this);
    }

    componentDidMount() {
        this.getRecipe();

    }

    /** 
     * Use Axios to send a request to the server to get the saved recipes from the database
     */
    getRecipe() {
        // console.log("Ready to try API request");
        axios.get("http://localhost:3030/saved")
            .then((response) => {
                // console.log(response.data);
                this.setState({fetchedRecipes: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {/* Loop through the state and render a DisplayRecipe component for each recipe */}
                {Array.from(this.state.fetchedRecipes).map((recipe, index) => (
                            <DisplayRecipe key={index}
                                            title={recipe.title}
                                            servingSize={recipe.servings}
                                            readyInMinutes={recipe.time}
                                            ingredients={recipe.ingredients}
                                            instructions={recipe.instructions}
                                            image={recipe.picture}/>
                        ))}
            </div>
        )
    }
}
export default DisplaySavedRecipe;
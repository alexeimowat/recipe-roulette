import React from "react";
import axios from "axios";
import DisplayRecipe from "../../DisplayRecipe";
import { Button } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";

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
                console.log(response.data);
                this.setState({fetchedRecipes: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    /** Refreshes the state with a new GET request. Called from the delete button component */
    applyChanges = () => {
        this.getRecipe();
    }

    render() {
        return (
            <div>
            <Tabs 
                defaultActiveKey="Supper"
                id="mealTypes"
                className="mb-3" 
                justify>
                <Tab eventKey="Breakfast" title="Breakfast">Breakfast</Tab>
                <Tab eventKey="Lunch" title="Lunch">Lunch</Tab>
                <Tab eventKey="Snacks" title="Snacks">Snacks</Tab>
                <Tab eventKey="Supper" title="Supper">Supper</Tab>
                <Tab eventKey="Dessert" title="Dessert">Dessert</Tab>
            </Tabs>
            <div className="container h-80 mt-3 mb-5" style={{float: 'left', marginLeft: '5%', width: '60%'}}>        
                {/* Loop through the state and render a DisplayRecipe component for each recipe */}
                {Array.from(this.state.fetchedRecipes).map((recipe, index) => (
                            <DisplayRecipe key={index}
                                            title={recipe.title}
                                            servingSize={recipe.servings}
                                            readyInMinutes={recipe.time}
                                            ingredients={recipe.ingredients}
                                            instructions={recipe.instructions}
                                            image={recipe.picture}
                                            isSaved={true}
                                            recipeID={recipe.recipeid}
                                            applyChg={this.applyChanges}/>
                        ))}
            </div>
            </div>
        )
    }
}
export default DisplaySavedRecipe;
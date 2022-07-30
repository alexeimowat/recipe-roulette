import React from "react";
import axios from "axios";
import DisplayRecipe from "../../DisplayRecipe/DisplayRecipe";
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
        this.state = {
            fetchedRecipes: [],
            breakfastRecipes: [],
            lunchRecipes: [],
            snackRecipes: [],
            supperRecipes: {},
            dessertRecipes: []
        };

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
                let breakfast = [];
                let lunch = [];
                let snacks = [];
                let suppers = [];
                let desserts = [];

                /** Loop through our response and store the recipes that match our 
                 * meal types. This will be stored in the state and accessed in when rendered
                 */
                for (let i=0; i<response.data.length; i++) {
                    console.log(response.data[i].meal);
                    let curMeal = response.data[i].meal;
                    if (!curMeal.localeCompare("Breakfast")) {
                        breakfast.push(response.data[i]);
                    }
                    else if (!curMeal.localeCompare("Lunch")) {
                        lunch.push(response.data[i]);
                    }
                    else if (!curMeal.localeCompare("Snack")) {
                        snacks.push(response.data[i]);
                    }
                    else if (!curMeal.localeCompare("Supper")) {
                        suppers.push(response.data[i]);
                    }
                    else {
                        desserts.push(response.data[i]);
                    }
                    
                }
                this.setState({fetchedRecipes: response.data,
                                breakfastRecipes: breakfast,
                                lunchRecipes: lunch,
                                snackRecipes: snacks,
                                supperRecipes: suppers,
                                dessertRecipes: desserts});

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
        let showBreakfasts = Array.from(this.state.breakfastRecipes).map((recipe, index) => (
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
        ));

        let showLunches = Array.from(this.state.lunchRecipes).map((recipe, index) => (
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
        ));

        let showSnacks = Array.from(this.state.snackRecipes).map((recipe, index) => (
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
        ));

        let showSuppers = Array.from(this.state.supperRecipes).map((supper, index) => (
            <DisplayRecipe key={index}
                            title={supper.title}
                            servingSize={supper.servings}
                            readyInMinutes={supper.time}
                            ingredients={supper.ingredients}
                            instructions={supper.instructions}
                            image={supper.picture}
                            isSaved={true}
                            recipeID={supper.recipeid}
                            applyChg={this.applyChanges}/>
        ));

        let showDesserts = Array.from(this.state.dessertRecipes).map((recipe, index) => (
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
        ));

        return (
            <div>
            <Tabs 
                defaultActiveKey="Supper"
                id="mealTypes"
                className="mb-3" 
                justify>
                <Tab eventKey="Breakfast" title="Breakfast">
                    <div className="container h-80 mt-3 mb-5" style={{float: 'left', marginLeft: '5%', width: '60%'}}>
                        {showBreakfasts}
                    </div>
                </Tab>
                <Tab eventKey="Lunch" title="Lunch">
                    <div className="container h-80 mt-3 mb-5" style={{float: 'left', marginLeft: '5%', width: '60%'}}>
                        {showLunches}
                    </div>
                </Tab>
                <Tab eventKey="Snacks" title="Snacks">
                    <div className="container h-80 mt-3 mb-5" style={{float: 'left', marginLeft: '5%', width: '60%'}}>
                        {showSnacks}
                    </div>
                </Tab>
                <Tab eventKey="Supper" title="Supper">
                    <div className="container h-80 mt-3 mb-5" style={{float: 'left', marginLeft: '5%', width: '60%'}}>
                        {showSuppers}
                    </div>
                </Tab>
                <Tab eventKey="Dessert" title="Dessert">
                    <div className="container h-80 mt-3 mb-5" style={{float: 'left', marginLeft: '5%', width: '60%'}}>
                        {showDesserts}
                    </div>
                </Tab>
            </Tabs>
            {/* <div className="container h-80 mt-3 mb-5" style={{float: 'left', marginLeft: '5%', width: '60%'}}>        
            
            </div> */}
            </div>
        )
    }
}
export default DisplaySavedRecipe;
import React from "react";
import axios from "axios";
import { Button, ButtonGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

/**
 * This component handles our Save functionality. As users browse through random recipes they may want to save 
 * some. This class renders the button 'Save' and when clicked sends a POST request to the server in order to 
 * save the recipe to the database
 */
class SaveRecipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meal: "Supper",
            saveSuccess: false
        }

        this.saveRecipe = this.saveRecipe.bind(this);
        this.prepareRecipe = this.prepareRecipe.bind(this);
    }

    /**
     * Send a POST request to the server to add our recipe to the database
     */
    saveRecipe(formattedInstructions, formattedIngredients) {
        let recipe = this.props.recipeDetails;
        axios.post("http://localhost:3030/save",
            {
                data: {
                    title: recipe.title,
                    time: recipe.readyInMinutes,
                    servings: recipe.servingSize,
                    recipeid: recipe.recipeID,
                    picture: recipe.image,
                    meal: this.state.meal,
                    instructions: formattedInstructions,
                    ingredients: formattedIngredients,
                    gf: false,
                    cuisine: 'test'
                }
            })
            .then((response) => {
                // console.log(response);
                // item added successfully
                this.setState({saveSuccess: true});
            })
            .catch((error) => {
                console.log(error)
            })
    }

    /** We need to prepare the 2 arrays in the recipe for Postgresql insert */
    prepareRecipe() {
        // Loop through the ingredients array and create a Postgresql style string
        let originalIng = this.props.recipeDetails.ingredients;
        let ingredientModified = '{"';
        for(let i=0; i<originalIng.length-1; i++) {
            ingredientModified = ingredientModified + originalIng[i] + '", "';
        }
        ingredientModified = ingredientModified + originalIng.splice(-1) + '"}';

        // Loop through the instructions and create a Postgresql style string
        let originalInst = this.props.recipeDetails.instructions;
        let instructionsModified = '{"';
        for(let j=0; j<originalInst.length-1; j++) {
            instructionsModified = instructionsModified + originalInst[j] + '", "'
        }
        instructionsModified = instructionsModified + originalInst.splice(-1) + '"}';

        this.saveRecipe(originalIng, originalInst);
    }

    changeMealType(newMeal) {
        this.setState({meal: newMeal});
        // const [value,setValue]=useState('');
        // const handleSelect=(e)=>{
        //     console.log(e);
            // setValue(e)
        // console.log(e);

    }

    render() {
        return (
            // <Button style={{ float: 'right' }} onClick={this.prepareRecipe}>Save</Button>
            <Dropdown as={ButtonGroup} style= {{ float: 'right' }} >
                {this.state.saveSuccess ? <Button disabled>Saved!</Button> : 
                <Button onClick={this.prepareRecipe}>Save to {this.state.meal}</Button>
                }       
                <DropdownToggle split variant="primary" id="mealCategory" />
                <DropdownMenu>
                    <DropdownItem> <div onClick={(e) => this.changeMealType(e.target.textContent)}>Breakfast</div> </DropdownItem>
                    <DropdownItem> <div onClick={(e) => this.changeMealType(e.target.textContent)}>Lunch</div> </DropdownItem>
                    <DropdownItem> <div onClick={(e) => this.changeMealType(e.target.textContent)}>Snack</div> </DropdownItem>
                    <DropdownItem> <div onClick={(e) => this.changeMealType(e.target.textContent)}>Supper</div> </DropdownItem>
                    <DropdownItem> <div onClick={(e) => this.changeMealType(e.target.textContent)}>Dessert</div> </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}
export default SaveRecipe;
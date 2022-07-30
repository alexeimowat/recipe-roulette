import React from "react";
import NavHeader from "../header/Header";
import NewRecipe from "../recipes/NewRecipe/NewRecipe";
import DisplaySavedRecipe from "../recipes/SavedRecipes/DisplaySavedRecipes/DisplaySavedRecipes";

/** 
 * Class to display the main content of the page. Two main components are used in this app:
 * - NewRecipe
 * - DisplaySavedRecipe
 * This class stores boolean values in its state which are passed as props to the header. The header is where the 
 * buttons to go to the 'Home' and 'Saved Recipes' pages are, they call this classes setState methods to determine 
 * which components are to be rendered
*/
class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNewRecipe: true,
            showSaved: false
        }

        this.showSavedClicked = this.showSavedClicked.bind(this);
        this.showNewRecipeClicked = this.showNewRecipeClicked.bind(this);

    }

    /** Toggle to display the Saved Recipes component */
    showSavedClicked() {
        console.log("Saved button clicked");
        this.setState({showNewRecipe: false, showSaved: true});
    }

    /** Toggle to display the New Recipe component */
    showNewRecipeClicked() {
        console.log("home button clicked");
        this.setState({showNewRecipe: true, showSaved: false});
    }

    render() {
        let contentToShow;
        if (this.state.showNewRecipe && !this.state.showSaved) {
            contentToShow = <NewRecipe />
        }
        else {
            contentToShow = <DisplaySavedRecipe />
        }

        return (
            <div>
                <NavHeader showSaved={this.showSavedClicked} showNewRecipe={this.showNewRecipeClicked}/>

                {contentToShow}
                
            </div>
        )
    }
}
export default MainContent;
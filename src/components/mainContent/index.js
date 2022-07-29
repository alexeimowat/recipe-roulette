import React from "react";
import NavHeader from "../header/index";
import NewRecipe from "../recipes/NewRecipe";
import DisplaySavedRecipe from '../recipes/SavedRecipes/DisplaySavedRecipes/index';
// import DisplayRecipe from "../recipes/DisplayRecipe";

const initialState = {
    showNewRecipe: true,
    showSaved: false
};

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

    showSavedClicked() {
        console.log("Saved button clicked");
        this.setState({showNewRecipe: false, showSaved: true});
    }

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

                {/* <NewRecipe /> */}
                {contentToShow}
            </div>
        )
    }
}
export default MainContent;
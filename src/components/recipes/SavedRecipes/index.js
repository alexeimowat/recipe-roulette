import React from "react";
import axios from "axios";

class SavedRecipes extends React.Component {

    constructor(props) {
        super(props);

        this.getRecipe = this.getRecipe.bind(this);
    }

    getRecipe() {
        // console.log("Ready to try API request");
        axios.get("http://localhost:3030/saved")
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <button onClick={this.getRecipe}>Test fetch</button>
            </div>
        )
    }
}
export default SavedRecipes;
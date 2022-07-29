import React from "react";
import axios from "axios";

class DisplaySavedRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fetchedRecipes: []};

        this.getRecipe = this.getRecipe.bind(this);
        this.gatherRecipes = this.gatherRecipes.bind(this);

        // this.getRecipe();
        // axios.get("http://localhost:3030/saved")
        //     .then((response) => {
        //         console.log(response.data);
                
                
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
         

    }

    componentDidMount() {
        this.getRecipe();

    }

    getRecipe() {
        // console.log("Ready to try API request");
        axios.get("http://localhost:3030/saved")
            .then((response) => {
                console.log(response.data);
                let reRecipes = response.data;
                this.gatherRecipes(reRecipes);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    gatherRecipes(results) {
        // console.log(results.length);
        // for (let i=0; i<results.length; i++) {
        //     for (let j=0; j<results[i]; j++) {
        //         this.setState({})
        //     }
        // }
        this.setState({fetchedRecipes: results});
    }

    render() {
        return (
            <div>
                {/* Hello, these are your saved recipes! */}
                {/* {Array.from(this.state.fetchedRecipes).map((recipe, index) => (
                            <li key={index}>{recipe}</li>
                        ))} */}
            </div>
        )
    }
}
export default DisplaySavedRecipe;
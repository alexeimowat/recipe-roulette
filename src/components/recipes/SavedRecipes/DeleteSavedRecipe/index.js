import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

class DeleteSavedRecipe extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {fetchedRecipes: ""};

        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    deleteRecipe() {
        // console.log("Delete the recipe with id: " + this.props.recipeid);
        axios.delete("http://localhost:3030/saved/" + this.props.recipeid)
            .then((response) => {
                console.log(response.data);
                this.props.applyChg();
                // this.setState({fetchedRecipes: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <Button variant="secondary" style={{ float: 'right', marginRight: '5px' }} onClick={this.deleteRecipe}>
                Delete
            </Button>
        )
    }
}
export default DeleteSavedRecipe;
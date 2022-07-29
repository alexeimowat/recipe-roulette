import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

class DeleteSavedRecipe extends React.Component {
    constructor(props) {
        super(props);

        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    deleteRecipe() {
        console.log("Delete the recipe with id: " + this.props.recipeid);
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
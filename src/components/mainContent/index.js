import React from "react";
import NavHeader from "../header/index";
import NewRecipe from "../recipes/NewRecipe";
// import DisplayRecipe from "../recipes/DisplayRecipe";

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavHeader />
                <NewRecipe />
            </div>
        )
    }
}
export default MainContent;
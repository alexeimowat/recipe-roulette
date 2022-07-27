import React from "react";

class DisplayRecipe extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                DisplayRecipe Says Hello!{this.props.title}
            </div>
        )
    }
}

export default DisplayRecipe;
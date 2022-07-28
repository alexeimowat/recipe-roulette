import React from "react";
import DOMPurify from "dompurify";
// import './index.css';

// import { Card } from "react-bootstrap/Card";
import Card from 'react-bootstrap/Card';

class DisplayRecipe extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ width: '40rem', margin: 'auto' }}>
                <Card.Img varient="top" src={this.props.image}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle>Ingredients</Card.Subtitle>
                    <Card.Text>
                        {/* {this.props.ingredients[0]} */}
                            {Array.from(this.props.ingredients).map(ingredient => (
                                <li key="{this.props.ingredients.prototype.indexOf(ingredient).toString()}">{ingredient}</li>
                            ))}
                    </Card.Text>
                    {/* <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.props.ingredientList)}} /> */}


                </Card.Body>
            </Card>
            // <div>            
            //     <img src={this.props.image} />
            //     <div className="titleContent">
            //         {this.props.title}
            //     </div>
            // </div>
        )
    }
}

export default DisplayRecipe;
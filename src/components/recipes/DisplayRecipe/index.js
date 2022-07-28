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
                    <Card.Text>
                        Serves {this.props.servingSize}, Ready in {this.props.readyInMinutes} minutes</Card.Text>
                    <Card.Subtitle>Ingredients</Card.Subtitle>
                    <Card.Text>
                        {Array.from(this.props.ingredients).map(ingredient => (
                            <li key={Math.random()}>{ingredient}</li>
                        ))}    
                    </Card.Text>
                    <Card.Subtitle>Steps</Card.Subtitle>
                    <Card.Text>
                        {Array.from(this.props.instructions).map((instructions, index) => (
                            <li key={index}>{instructions}</li>
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
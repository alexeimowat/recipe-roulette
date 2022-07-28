import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SavedRecipes from "../recipes/SavedRecipes";

class NavHeader extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Recipe Roulette</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            {/* <Nav.Link>Saved</Nav.Link> */}
                            <SavedRecipes />
                            <Nav.Link>About</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        )
    }
}
export default NavHeader;
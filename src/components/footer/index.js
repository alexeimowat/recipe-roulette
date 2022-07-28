import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

class NavFooter extends React.Component {
    render() {
        return (
            // <Navbar bg="light" variant="light" style={{ top: '0' }}>
            //     <Container>
            //         {/* <Navbar.Brand href="#home">RR</Navbar.Brand> */}
            //             <Nav className="me-auto">
            //             <Nav.Link href="https://github.com/alexeimowat">Github</Nav.Link>
            //             <Nav.Link href="https://www.linkedin.com/in/alexei-mowat-114038152/">LinkedIn</Nav.Link>
            //         </Nav>
            //     </Container>
            // </Navbar>
            <div className={"footerContainer"}>
                {/* <p>
                    hello
                </p> */}
                {/* <Nav.Link href="https://github.com/alexeimowat">Github</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/alexei-mowat-114038152/">LinkedIn</Nav.Link> */}
                <a href="https://github.com/alexeimowat"
                    target="_blank">
                    Github
                </a>
        
                <a href="https://www.linkedin.com/in/alexei-mowat-114038152/"
                    target="_blank">
                    LinkedIn
                </a>
            </div>
        )
    }
}
export default NavFooter;
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../../images/logo.svg'
import cart from '../../images/cart.svg'
import './index.css'

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav className="navbar__links">
                    <Nav.Link href="#deets" className="navbar__link active">Home</Nav.Link>
                    <Nav.Link href="#deets" className="navbar__link">Menu</Nav.Link>
                    <Nav.Link href="#deets" className="navbar__link">Service</Nav.Link>
                    <Nav.Link href="#memes" className="navbar__link">
                        Sign In
                    </Nav.Link>
                    <Nav.Link href="#memes" className="navbar__linkCart">
                        <img height={'19px'} src={cart} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
export default Navigation
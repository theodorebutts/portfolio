import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function Navigation(props) {
    const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume']

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="header">
            <Navbar.Brand>Theodore Butts</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {tabs.map(tab => (
                        <li className="nav-item" key={tab}>
                            <Nav.Link
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                            >
                                {tab}
                            </Nav.Link >
                        </li>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
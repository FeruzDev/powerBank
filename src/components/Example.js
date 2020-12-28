import React, { useState } from 'react';
import "./main.scss";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import { BrowserRouter, Route, Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="mainNavbar">
            <BrowserRouter>
           <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src="./photos/brand.svg" alt=""/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/main"  >Главная</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/partners" >Партнеры</Link>
                        </NavItem>
                        <NavItem>
                            <Link>Контакты</Link>
                       </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
            </BrowserRouter>
        </div>
    );
}

export default Example;
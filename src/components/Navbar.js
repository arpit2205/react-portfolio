import React, { useState } from 'react';
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
  NavbarText,
} from 'reactstrap';
import ScrollIntoView from 'react-scroll-into-view';
import coffee from './emoji/coffee.gif';
import peace from './emoji/peace.gif';
import RiMenu4Fill from 'react-icons/ri';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = () => {
    window.location = 'https://www.instagram.com/arpithere_/';
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand id="brand" href="/">
          <img id="peace" src={peace} className="mr-2" />
          ARPIT
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <ScrollIntoView selector="#education">
              <NavItem>
                <NavLink href="#">Education</NavLink>
              </NavItem>
            </ScrollIntoView>
            <ScrollIntoView selector="#experience">
              <NavItem>
                <NavLink href="#">Experience</NavLink>
              </NavItem>
            </ScrollIntoView>
            <ScrollIntoView selector="#communities">
              <NavItem>
                <NavLink href="#">Communities</NavLink>
              </NavItem>
            </ScrollIntoView>
            <ScrollIntoView selector="#skills">
              <NavItem>
                <NavLink href="#">Skills</NavLink>
              </NavItem>
            </ScrollIntoView>
            <ScrollIntoView selector="#projects">
              <NavItem>
                <NavLink href="#">Projects</NavLink>
              </NavItem>
            </ScrollIntoView>
            <ScrollIntoView selector="#contact">
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </ScrollIntoView>
          </Nav>
          <NavbarText id="insta" onClick={navigate}>
            Let's have a coffee <img src={coffee} />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

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

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Arpit Gupta</NavbarBrand>
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
            <ScrollIntoView selector="#contact">
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </ScrollIntoView>
          </Nav>
          <NavbarText>Let's have a coffee ☕</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

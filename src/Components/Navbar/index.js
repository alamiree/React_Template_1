import React from 'react';

import {NavbarSection, Logo, LogoText, UlList, ListItem, NLink, NavLinks} from './style.js';

const Navbar = () => {
    return (
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem><NLink exact = "true" to="/">Home</NLink></ListItem>
                    <ListItem><NavLinks href="/">Work</NavLinks></ListItem>
                    <ListItem><NavLinks href="/">Portfolio</NavLinks></ListItem>
                    <ListItem><NavLinks href="/">Resume</NavLinks></ListItem>
                    <ListItem><NavLinks href="/">About</NavLinks></ListItem>
                    <ListItem><NLink to="/contact">Contact</NLink></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
    )
}
export default Navbar;
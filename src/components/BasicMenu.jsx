import React, { useRef } from 'react';
//styles
import { DropdownButton, DropdownContainer, DropdownContent, LinkButton, MenuBarraNav } from '../styles/NavBar';
import { data } from '../data/Data';


function BasicMenu() {

    const [datos] = data
    const { about, skills, work, contact } = datos

    return (
        <MenuBarraNav>

            <LinkButton to='#'>{about.name}</LinkButton>
            <LinkButton to='#'>{skills.name}</LinkButton>
            <LinkButton to='#'>{work.name}</LinkButton>
            <LinkButton to='#'>{contact.name}</LinkButton>

        </MenuBarraNav>
    );
}



export default BasicMenu;



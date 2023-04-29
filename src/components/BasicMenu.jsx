import React, { useRef } from 'react';
//styles
import { DropdownButton, DropdownContainer, DropdownContent, LinkButton, MenuBarraNav } from '../styles/NavBar';
import { data } from '../data/Data';


function BasicMenu() {

    const [datos] = data
    const { about, skills, work, contact } = datos

    return (
        <MenuBarraNav>

            <LinkButton>
                {about.name}
            </LinkButton>
            <LinkButton>
                {skills.name}
            </LinkButton>
            <LinkButton>
                {work.name}
            </LinkButton>
            <LinkButton>
                {contact.name}
            </LinkButton>

        </MenuBarraNav>
    );
}



export default BasicMenu;



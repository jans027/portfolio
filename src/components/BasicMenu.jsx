import React from 'react';
//styles
import { LinkButton, MenuBarraNav } from '../styles/NavBar';
//import data
import { data } from '../data/Data';


function BasicMenu() {

    //get data
    const [datos] = data
    // destructuring data
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



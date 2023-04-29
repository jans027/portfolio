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

            <LinkButton to={about.url}>{about.name}</LinkButton>
            <LinkButton to={skills.url}>{skills.name}</LinkButton>
            <LinkButton to={work.url}>{work.name}</LinkButton>
            <LinkButton to={contact.url}>{contact.name}</LinkButton>

        </MenuBarraNav>
    );
}



export default BasicMenu;



import React from 'react'
//styles
import { ContFooter } from '../styles/Footer';
//import icons material
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import { data } from '../data/Data';
import { Link } from 'react-router-dom';
import { ItemFooter } from '../styles/Footer';

const Footer = () => {

    const [datos] = data;
    const { politica } = datos

    return (
        <ContFooter>
            <ItemFooter>
                <p>&copy; 2023 Julian Sanabria</p>
                <p className='text_2'>&nbsp; Todos los derechos reservados.</p>
            </ItemFooter>
            <ItemFooter>
                <Link to='/'>{politica.name}</Link>
            </ItemFooter>
            <ItemFooter>
                <Link className='Logo' to='/'><GitHubIcon/></Link>
                <Link className='Logo' to='/'><LinkedInIcon/></Link>
            </ItemFooter>
        </ContFooter>
    )
}

export default Footer;
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

    //get data
    const [datos] = data;
    //destructuring data
    const { politica } = datos

    return (
        <ContFooter>
            <ItemFooter>
                <p>&copy; 2023 Julian Sanabria</p>
                <p className='text_2'>&nbsp; Todos los derechos reservados.</p>
            </ItemFooter>
            <ItemFooter>
                <Link to={politica.url}>{politica.name}</Link>
            </ItemFooter>
            <ItemFooter>
                <Link target='_blank' className='Logo' to='https://github.com/jans027'><GitHubIcon/></Link>
                <Link target='_blank' className='Logo' to='https://www.linkedin.com/in/julian-sanabria-martinez/'><LinkedInIcon/></Link>
            </ItemFooter>
        </ContFooter>
    )
}

export default Footer;
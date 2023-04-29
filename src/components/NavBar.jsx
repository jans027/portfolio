import React from 'react';
//import data
import { data } from '../data/Data.js';
//import react router dom
import { Link } from 'react-router-dom';
//import components
import BasicMenu from './BasicMenu.jsx';
import ResponsiveNavBar from './ResponsiveNavBar.jsx';
//import material ui
// import PhoneIcon from '@mui/icons-material/Phone';
// import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
// import PlaceIcon from '@mui/icons-material/Place';
//styles
import { ContenedorNavBar, Direcciones, Direcciones1, LogoPrincipal, LogosRedes } from '../styles/NavBar.js';
import { HamburguerMenu } from '../styles/ResponsiveNavBar.js';
// import ResponsiveNavBar from './ResponsiveNavBar.jsx';


const NavBar = () => {

    //ghet data
    const [datos] = data
     //destructuring data
    const { inicio: { logoPrincipal } } = datos;
    

    return (
        <ContenedorNavBar>

            <Direcciones>
                {/* <Direcciones1>
                    <Link target="_blank" to={urlDireccion}> <PlaceIcon /> {direccion} </Link>
                    <Link> <PhoneIcon /> {telefono1} </Link>
                    <Link target="_blank" to={urlTelefono2}> <PhonelinkRingIcon /> {telefono2} </Link>
                </Direcciones1> */}

                {/* <LogosRedes>
                    <Link target="_blank" to={urlFacebook} > <img src={require(`../images/${facebook}`)} alt="facebook" /> </Link>
                    <Link target="_blank" to={urlLinkedIn}> <img src={require(`../images/${linkedIn}`)} alt="linkedIn" /> </Link>
                    <Link target="_blank" to={urlInstagram}> <img src={require(`../images/${instagram}`)} alt="instagram" /> </Link>
                </LogosRedes> */}
            </Direcciones>

            <LogoPrincipal>
                <Link to="/"> <img src={require(`../images/${logoPrincipal}`)} alt={logoPrincipal}/> </Link>
                <div>
                    {/* <BasicMenu /> */}
                </div>
                <HamburguerMenu>
                    {/* <ResponsiveNavBar /> */}
                </HamburguerMenu>
            </LogoPrincipal>
            
        </ContenedorNavBar>
    )
}

export default NavBar
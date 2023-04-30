import React, { useState } from 'react';
//import bootstrap
import Offcanvas from 'react-bootstrap/Offcanvas';
//import material ui
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
//styles
import { AccordionFooter, ButtonCloseModal, ContentCanvas, ContText, EnlaceDesplegable, TitleAccor } from '../styles/ResponsiveNavBar';
//Acordion
import AccordionDetails from '@mui/material/AccordionDetails';
import { Link } from 'react-router-dom';
import { data } from '../data/Data';




function ResponsiveNavBar() {

    //get data
    const [datos] = data
    // destructuring data
    const { about, skills, work, contact } = datos

    // ...........show  and close modal....................
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // ....................................................


    return (
        <>
            <button variant="primary" onClick={handleShow}>
                <MenuIcon />
            </button>

            <ContentCanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                    <ButtonCloseModal onClick={handleClose}><CloseIcon /></ButtonCloseModal>
                </Offcanvas.Header>
                <ContText>
                    <AccordionFooter onClick={handleClose} to={about.url}>
                        <AccordionDetails>
                            <EnlaceDesplegable>
                                <span>{about.name}</span>
                            </EnlaceDesplegable>
                        </AccordionDetails>
                    </AccordionFooter>

                    <AccordionFooter onClick={handleClose} to={skills.url}>
                        <AccordionDetails>
                            <EnlaceDesplegable>
                                <span>{skills.name}</span>
                            </EnlaceDesplegable>
                        </AccordionDetails>
                    </AccordionFooter>

                    <AccordionFooter onClick={handleClose} to={work.url}>
                        <AccordionDetails>
                            <EnlaceDesplegable>
                                <span>{work.name}</span>
                            </EnlaceDesplegable>
                        </AccordionDetails>
                    </AccordionFooter>

                    <AccordionFooter onClick={handleClose} to={contact.url}>
                        <AccordionDetails>
                            <EnlaceDesplegable>
                                <span>{contact.name}</span>
                            </EnlaceDesplegable>
                        </AccordionDetails>
                    </AccordionFooter>
                </ContText>
            </ContentCanvas >
        </>
    );
}
export default ResponsiveNavBar
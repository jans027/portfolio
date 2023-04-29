import React, { useEffect, useState } from 'react'
//import data
import { data } from '../data/Data'
import { Helmet } from 'react-helmet';
import { CardPol, ContPrincipal, TitlePol } from '../styles/Politicas';

const Politicas = () => {

    //get data
    const [datos] = data;
    //destructuring datos
    const { politica: { name, cards } } = datos;
    const card = Object.values(cards);

    //...handle animation when the window is loaded..........

    function cambiarClase() {
        const elemento = document.querySelector('#element');
        elemento.classList.remove('clase-1');
        elemento.classList.add('clase-2');
    }

    useEffect(() => {
        window.onload = cambiarClase;
    }, []);
    //...................................

    return (
        <>
            <Helmet>
                <title>Desarrollador Web - Política de Protección de Datos Personales</title>
                {/* <meta name="description" content="Helmet application" /> */}
                <h1>{name}</h1>
            </Helmet>
            <ContPrincipal>
                <TitlePol id='element' className='clase-1'>{name}</TitlePol>
                {
                    card.map((item) =>
                        <CardPol key={item.id}>
                            <p className='Text_1'>{item.text0}</p>
                            {/* <p className='Text_2'>{item.text1}</p> */}
                            <p className='Text_2'>{item.text1.split('\n').map((line, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                )
                            })}</p>
                        </CardPol>
                    )
                }
            </ContPrincipal>
        </>
    )
}

export default Politicas
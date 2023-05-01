import React from 'react'
import { data } from '../data/Data'
import { Helmet } from 'react-helmet'
import { ContProy, ContProyects, TitleProy } from '../styles/Proyectos'

const Proyectos = () => {
    //get data
    const [datos] = data
    //destructuring data
    const { work: { name } } = datos


    return (
        <>
            <Helmet>
                <title>{name}</title>
                {/* <meta name="description" content="Helmet application" /> */}
                <h1>{name}</h1>
            </Helmet>
            <ContProyects>
                <ContProy>
                <TitleProy>{name}</TitleProy>


                </ContProy>
            </ContProyects>
        </>
    )
}

export default Proyectos
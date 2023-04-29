import React from 'react'
import { data } from '../data/Data'
import { Helmet } from 'react-helmet'

const Conocimientos = () => {
    //get data
    const [datos] = data
    //destructuring data
    const { skills: { name } } = datos


    return (
        <>
            <Helmet>
                <title>{name}</title>
                {/* <meta name="description" content="Helmet application" /> */}
                <h1>{name}</h1>
            </Helmet>

        </>
    )
}

export default Conocimientos
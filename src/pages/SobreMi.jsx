import React from 'react'
import { Helmet } from 'react-helmet'
import { data } from '../data/Data'

const SobreMi = () => {

    //get data
    const [datos] = data
    //destructuring data
    const { about: { name } } = datos


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

export default SobreMi
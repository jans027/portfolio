import React from 'react'
import { Helmet } from 'react-helmet'
import BackAnimation from '../components/BackAnimation'
import TitleHome from '../components/TitleHome'

const Home = () => {

    return (
        <>
            <Helmet>
                <title>Portfolio Tecnólogo en Desarrollo de Software,</title>
                {/* <meta name="description" content="Helmet application" /> */}
                <h1>Desarrollador Web</h1>
            </Helmet>
            <BackAnimation />
            <TitleHome />
        </>
    )
}

export default Home
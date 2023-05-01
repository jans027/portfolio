import React, { useState } from 'react'
import { data } from '../data/Data'
import { Helmet } from 'react-helmet'
import { CardP, ContCardsP, ContImgP, ContProy, ContProyects, TitleProy } from '../styles/Proyectos'
import { Link } from 'react-router-dom'

const Proyectos = () => {
    //get data
    const [datos] = data
    //destructuring data
    const { work: { name, cards } } = datos
    const card = Object.values(cards)

    //..........................................
    const [changeClass, setChangeClass] = useState('')
    const handleButtonClick = (index) => {
        setChangeClass(index)
    };
    //..........................................


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
                    <ContCardsP>
                        {
                            card.map((item, index) =>
                                <CardP
                                    key={index}
                                    className={changeClass === index ? 'animate' : 'close'}
                                    onClick={() => handleButtonClick(index)}
                                >

                                    <div className={changeClass === index ? 'textanim' : 'closeText'}>
                                        <span>
                                            <p>{item.title}</p>
                                            <Link target='_blank' to={item.url}>Visita Este Proyecto</Link>
                                        </span>
                                    </div>
                                    <ContImgP>
                                        <img src={require(`../images/${item.img}`)} alt={`imagen-${item.name}`} />
                                    </ContImgP>
                                </CardP >
                            )
                        }
                    </ContCardsP>
                </ContProy>
            </ContProyects>
        </>
    )
}

export default Proyectos
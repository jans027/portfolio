import React from 'react'
import { data } from '../data/Data'
import { Helmet } from 'react-helmet'
import { CardsC, ContAniCon, ContCardsC, ContConoc, ContImgC, SubTitleC, TextC, TitleConoc } from '../styles/Conocimientos'

const Conocimientos = () => {
    //get data
    const [datos] = data
    //destructuring data
    const { skills: { name, subTitle1, subTitle2, front, others } } = datos
    const cards1 = Object.values(front);
    const cards2 = Object.values(others);


    return (
        <>
            <Helmet>
                <title>{name}</title>
                {/* <meta name="description" content="Helmet application" /> */}
                <h1>{name}</h1>
            </Helmet>
            <ContAniCon>
                <ContConoc>
                    <TitleConoc>{name}</TitleConoc>
                    <SubTitleC>{subTitle1}</SubTitleC>
                    <ContCardsC >
                        {
                            cards1.map((item, index) =>
                                <CardsC key={index}>
                                    <ContImgC >
                                        <img
                                        src={require(`../images/${item.img}`)}
                                        alt={`imagen ${name}`} />
                                    </ContImgC >
                                    <TextC>{item.name}</TextC>
                                </CardsC>
                            )
                        }
                    </ContCardsC >
                    <SubTitleC>{subTitle2}</SubTitleC>
                    <ContCardsC >
                        {
                            cards2.map((item, index) =>
                                <CardsC key={index}>
                                    <ContImgC >
                                        <img
                                        src={require(`../images/${item.img}`)}
                                        alt={`imagen ${name}`} />
                                    </ContImgC >
                                    <TextC>{item.name}</TextC>
                                </CardsC>
                            )
                        }
                    </ContCardsC >
                </ContConoc>
            </ContAniCon>

        </>
    )
}

export default Conocimientos
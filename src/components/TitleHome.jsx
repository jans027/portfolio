import React from 'react'
import { ContText, TitleH, WordsH } from '../styles/Home'
import { data } from '../data/Data'

const TitleHome = () => {

    //get data
    const [datos] = data;
    //ddestructuring data
    const { inicio: { titleHome, titleHome2, titleHome3 } } = datos;
    const words = Object.values(titleHome);
    const words2 = Object.values(titleHome2);
    const words3 = Object.values(titleHome3);


    return (
        <ContText>
            <TitleH>
                {words.map((item, index) => <WordsH key={index}>{item}</WordsH>)}
            </TitleH>
            <TitleH>
                {words2.map((item, index) => <WordsH key={index}>{item}</WordsH>)}
            </TitleH>
            <TitleH>
                {words3.map((item, index) => <WordsH key={index}>{item}</WordsH>)}
            </TitleH>
        </ContText>
    )
}

export default TitleHome
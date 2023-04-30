import React, { useEffect, useState } from 'react'
import { AuxText, ContText, TitleH, WordsH } from '../styles/Home'
import { data } from '../data/Data'

const TitleHome = () => {

    //get data
    const [datos] = data;
    //ddestructuring data
    const { inicio: { titleHome, titleHome2, titleHome3, paragraphHome } } = datos;
    const words = Object.values(titleHome);
    const words2 = Object.values(titleHome2);
    const words3 = Object.values(titleHome3);

    //...handle animation when the window is loaded..........
    const[change, setChange] = useState(false)
    useEffect(() => {
        // Obtener el elemento que se animará
        const animatedElement = document.getElementById('element');

        window.onload = setChange(true);
    
        // Agregar la clase para activar la animación
        animatedElement.classList.add('animate');
    
        // Eliminar la clase después de 1 segundo
        setTimeout(() => {
            animatedElement.classList.remove('animate');
            setChange(false)
        }, 1000);
    }, []);
    //...................................



    return (
        <ContText>
            <TitleH>
                {words.map((item, index) => 
                <WordsH 
                id='element' 
                className={change? 'class1 animate': 'class1'}
                key={index}>{item}</WordsH>)}
            </TitleH>
            <TitleH>
                {words2.map((item, index) => 
                <WordsH 
                id='element' 
                className={change? 'class1 animate': 'class1'}
                key={index}>{item}</WordsH>)}
            </TitleH>
            <TitleH>
                {words3.map((item, index) => 
                <WordsH 
                id='element' 
                className={change? 'class1 animate': 'class1'}
                key={index}>{item}</WordsH>)}
            </TitleH>
            <AuxText>{paragraphHome.split('\n').map((line, i) => {
                return (
                    <React.Fragment key={i}>
                        {line}
                        <br />
                    </React.Fragment>
                )
            })}</AuxText>
        </ContText>
    )
}

export default TitleHome
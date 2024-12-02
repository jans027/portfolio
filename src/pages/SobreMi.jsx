import React from 'react'
import { Helmet } from 'react-helmet'
import { data } from '../data/Data'
import { ContAnimation, ContSobreMi, Text1S, TitleSobreMi } from '../styles/SobreMi'
import styled from 'styled-components'
import { changeColor } from '../styles/Resources2'

const SobreMi = () => {

    //get data
    const [datos] = data
    //destructuring data
    const { about: { name, text: { p1, p2, p3, p4, p5, p6 } } } = datos

    // search word ..........................................
    const boldtWord1 = "Misión";
    const parts1 = p1.split(boldtWord1);

    const boldtWord2 = "Visión";
    const parts2 = p3.split(boldtWord2);

    const boldtWord3 = "JavaScript, PHP, HTML, CSS, React.Js.";
    const parts3 = p6.split(boldtWord3);
    //......................................................

    const Span1 = styled.span`
        animation: ${changeColor} 5000ms ease-out 1ms;
    `

    return (
        <>
            <Helmet>
                <title>{name}</title>
                {/* <meta name="description" content="Helmet application" /> */}
                <h1>{name}</h1>
            </Helmet>
            <ContAnimation>
                <ContSobreMi>
                    <TitleSobreMi>{name}</TitleSobreMi>
                    <Text1S>
                        {parts1[0]}
                        <Span1 
                        classname='animation1' 
                        style={{ fontWeight: 'bold', color: '#32c2f1', fontSize: '20px' }}>
                            {boldtWord1}</Span1>
                        {parts1[1]}
                    </Text1S>
                    {/* <Text1S>{p2.split('\n').map((line, i) => {
                        return (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        )
                    })}</Text1S> */}
                    <Text1S>
                        {parts2[0]}
                        <Span1 
                        classname='animation1' 
                        style={{ fontWeight: 'bold', color: '#32c2f1', fontSize: '20px' }}>
                            {boldtWord2}</Span1>
                        {parts2[1]}
                    </Text1S>
                    {/* <Text1S>{p4.split('\n').map((line, i) => {
                        return (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        )
                    })}</Text1S> */}
                    {/* <Text1S>
                        {p5}
                    </Text1S> */}
                    {/* <Text1S>
                        {parts3[0]}
                        <Span1 
                        classname='animation1' 
                        style={{ fontWeight: 'bold', color: '#32c2f1', fontSize: '20px' }}>
                            {boldtWord3}</Span1>
                        {parts3[1]}
                    </Text1S> */}
                </ContSobreMi>
            </ContAnimation>
        </>
    )
}

export default SobreMi
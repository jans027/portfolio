import React from 'react'
import { Helmet } from 'react-helmet'
import { data } from '../data/Data'
import { ContSobreMi, Text1S, TitleSobreMi } from '../styles/SobreMi'

const SobreMi = () => {

    //get data
    const [datos] = data
    //destructuring data
    const { about: { name, text: { p1, p2, p3, p4, p5, p6 } } } = datos

    // search word ..........................................
    const boldtWord1 = "Mision Tic y la Universidad Sergio Arboleda";
    const parts1 = p1.split(boldtWord1);

    const boldtWord2 = "Academia Geek";
    const parts2 = p3.split(boldtWord2);

    const boldtWord3 = "JavaScript, PHP, HTML, CSS, React.Js.";
    const parts3 = p6.split(boldtWord3);
    //......................................................


    return (
        <>
            <Helmet>
                <title>{name}</title>
                {/* <meta name="description" content="Helmet application" /> */}
                <h1>{name}</h1>
            </Helmet>
            <ContSobreMi>
                <TitleSobreMi>{name}</TitleSobreMi>
                <Text1S>
                    {parts1[0]}
                    <span style={{ fontWeight: 'bold', color: '#32c2f1', fontSize: '20px' }}>{boldtWord1}</span>
                    {parts1[1]}
                </Text1S>
                <Text1S>{p2.split('\n').map((line, i) => {
                    return (
                        <React.Fragment key={i}>
                            {line}
                            <br />
                        </React.Fragment>
                    )
                })}</Text1S>
                <Text1S>
                    {parts2[0]}
                    <span style={{ fontWeight: 'bold', color: '#32c2f1', fontSize: '20px' }}>{boldtWord2}</span>
                    {parts2[1]}
                </Text1S>
                <Text1S>{p4.split('\n').map((line, i) => {
                    return (
                        <React.Fragment key={i}>
                            {line}
                            <br />
                        </React.Fragment>
                    )
                })}</Text1S>
                <Text1S>
                    {p5}
                </Text1S>
                <Text1S>
                    {parts3[0]}
                    <span style={{ fontWeight: 'bold', color: '#32c2f1', fontSize: '20px' }}>{boldtWord3}</span>
                    {parts3[1]}
                </Text1S>
            </ContSobreMi>

        </>
    )
}

export default SobreMi
import styled from "styled-components";


export const ContSobreMi = styled.section`
    border: 1px solid red;//.............
    padding-top: 150px ;
    width: 90%;
    max-width: 1200px;
    margin: auto;
`
export const TitleSobreMi = styled.section`
    font-size: clamp(40px, 6vw, 65px);
    font-weight: 900;
    font-family: var(--font1);
    color: var(--color7);
`
export const Text1S = styled.p`
    color: var(--basico);
    &::first-letter {
        color: var(--color7)!important;
        font-size: xx-large;
        font-weight: 900;
    }
`

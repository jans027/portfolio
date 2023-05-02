import styled, { keyframes } from "styled-components";
import { LastAnim } from "./Resources2";



export const ContAnimation = styled.section`
    width: 100%;
    height: 100%;
    background: rgb(35,39,47);
    background: radial-gradient(circle, rgba(35,39,47,1) 0%, rgba(94,94,94,1) 0%, rgba(35,39,47,1) 42%); 
`
export const ContSobreMi = styled.section`
    /* border: 1px solid red;//............. */
    padding-top: 150px ;
    padding-bottom: 7em;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto 3em auto;
`
export const TitleSobreMi = styled.section`
    font-size: clamp(40px, 6vw, 65px);
    font-weight: 900;
    font-family: var(--font1);
    color: var(--color7);
    animation: ${LastAnim} 5000ms ease-out 500ms;
`
export const Text1S = styled.p`
    color: var(--basico);
    &::first-letter {
        color: var(--color7)!important;
        font-size: xx-large;
        font-weight: 900;
    }
`

import styled from "styled-components";
import { LastAnim } from "./Resources2";


export const ContProyects = styled.section`
    width: 100%;
    height: 100%;
    background: rgb(35,39,47);
    background: 
        radial-gradient(circle, 
        rgba(35,39,47,1) 0%, 
        rgba(94,94,94,1) 0%, 
        rgba(35,39,47,1) 42%); 
`
export const ContProy = styled.div`
    /* border: 1px solid red;//............. */
    padding-top: 150px ;
    padding-bottom: 7em;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto 3em auto;
    @media (max-width:500px) {
        width: 90%;
    }
`
export const TitleProy = styled.p`
    font-size: clamp(40px, 6vw, 65px);
    font-weight: 900;
    font-family: var(--font1);
    color: var(--color7);
    animation: ${LastAnim} 1000ms ease-out 100ms;
`
import styled from "styled-components";
import { WordsAnimation, WordsAnimation2 } from "./Resourses";

export const ContText = styled.section`
    /* border: 1px solid red;//................. */
    width: 90%;
    position:absolute;
    top: 7em;
    left: 6%;
    margin-bottom:6em;
    padding-bottom: 7em;
`
export const TitleH = styled.p`
    /* border: 1px solid red;//................. */
    font-weight: 900;
    font-size: clamp(1em, 4vw, 3.5em);
    color: var(--basico);
    margin: 0;
    display: flex;
    .animate{
        animation: ${WordsAnimation} 600ms ease-out ;
        &:nth-child(odd){
        animation: ${WordsAnimation2} 600ms ease-out ;
        }
    }
`
export const WordsH = styled.div`
    /* border: 1px solid red;//....... */
    color: var(--color7);
    &:hover{
        /* color: var(--color7); */
        color: var(--basico);
        &:nth-child(5n-1){
        }
        animation: ${WordsAnimation} 600ms ease-out ;
        &:nth-child(odd){
        animation: ${WordsAnimation2} 600ms ease-out ;
    }
    }
    
`
export const AuxText = styled.p`
    color: var(--basico);
    width: 80%;
    max-width: 900px;
    font-size: clamp(1em, 2vw, 2em);
    margin-bottom: 1em;
    &:nth-child(5n-1){
        /* color: var(--color7); */
    }
`
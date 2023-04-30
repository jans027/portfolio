import styled from "styled-components";
import { WordsAnimation, WordsAnimation2 } from "./Resourses";

export const ContText = styled.section`
    /* border: 1px solid red;//................. */
    position:absolute;
    top: 20%;
    left: 3%;

`
export const TitleH = styled.p`
    /* border: 1px solid red;//................. */
    font-weight: 900;
    font-size: clamp(30px, 6vw, 75px);
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
    width: 90%;
    max-width: 1000px;
    font-size: clamp(16px, 2vw, 25px);
    margin-bottom: 3em;
    &:nth-child(5n-1){
        /* color: var(--color7); */
    }
`
import styled from "styled-components";
import { WordsAnimation, WordsAnimation2, vibrate } from "./Resourses";

export const ContText = styled.section`
    /* border: 1px solid red;//................. */
    position:absolute;
    top: 25%;
    left: 3%;

`
export const TitleH = styled.p`
    /* border: 1px solid red;//................. */
    font-weight: 900;
    font-size: 75px;
    color: var(--basico);
    margin: 0;
    display: flex;
    &:hover{
        /* animation: ${vibrate} 50ms ease-out infinite; */
    }
`
export const WordsH = styled.div`
    /* border: 1px solid red;//....... */
    &:hover{
        /* transform: scale(.9)!important; */
        transition:all 100ms ease-in-out;
        color: var(--color7);
        animation: ${WordsAnimation} 600ms ease-out ;
        &:nth-child(odd){
        animation: ${WordsAnimation2} 600ms ease-out ;
    }
    }
    
`
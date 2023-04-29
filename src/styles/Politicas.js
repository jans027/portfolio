import styled from "styled-components";
import { vibrate } from "./Resourses";


export const ContPrincipal = styled.section`
    /* border: 1px solid red;//................ */
    padding: 150px 0;
    background-color: var(--color1);
    color: var(--basico);
    width: 90%;
    max-width: 1200px;
    margin: auto;
    .clase-2 {
        animation: ${vibrate} 400ms ease-out 500ms;
    }
`
export const TitlePol = styled.p`
    font-size: clamp(40px, 6vw, 65px);
    font-family: var(--font1);
    color: var(--color7);
    text-align: center;
`
export const CardPol = styled.div`
    /* border: 1px solid red;//................ */
    .Text_1{
        font-size: clamp(30px, 4vw, 45px);
        color: var(--color4);
    }
    .Text_2{
        font-size: clamp(19px, 2vw, 25px);
        color: var(--basico);
        padding: 1em 0;
    }
`
import styled from "styled-components";
import { vibrate } from "./Resourses";


export const ContFooter = styled.footer`
    /* border: 1px solid red;//.................. */
    background-color: var(--color2);
    position: fixed;
    bottom: 0!important;
    left: 0;
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: space-evenly;
    @media (max-width:700px) {
        flex-direction: column;
        height: auto;
        justify-content: center;
    }
`
export const ItemFooter = styled.div`
    /* border: 1px solid red;//.................. */
    display: flex;
    align-items: center;
    color: var(--basico);
    @media (max-width:700px) {
        justify-content:center;
        padding: .5em 0;
    }
    p{
        margin: 0;
    }
    a{
        /* border: 1px solid red;//................... */
        color: var(--basico);
        text-decoration: none;
        &:hover{
            color: var(--color7);
        }
        &:active{
            animation: ${vibrate} 50ms ease-out infinite;
        }
    }
    .text_2{
        @media (max-width:450px) {
            display: none;
        }
    }
    .Logo{
        margin: 0 1em;
    }
`

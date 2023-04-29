import { Offcanvas } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Spin = keyframes`
    100% {transform: rotate(360deg);}
`
const vibrate = keyframes`
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(-4px, -4px);
    }
    40% {
        transform: translate(4px, 4px);
    }
    60% {
        transform: translate(-4px, 4px);
    }
    80% {
        transform: translate(4px, -4px);
    }
    100% {
        transform: translate(0);
    }
`
export const HamburguerMenu = styled.div`
    /* border: 1px solid red;//................ */
    display: none;
    @media (max-width:1050px) {
        display: block;
    }
    button{
        border: none;
        background-color: transparent;
        svg{
            font-size: 40px;
            color: var(--color4);
        }
    }
    &:active{
        animation: ${vibrate} 10ms linear infinite;
    }
`
export const ContentCanvas = styled(Offcanvas)`
    &{
        background-color: var(--color3);
        max-width: 80%;
        .btn-close{
            display: none;
        }
    }

`
export const ButtonCloseModal = styled.button`
    border: none;
    background-color:transparent;
    svg{
        font-size: 40px;
        color: var(--color4);
        border-radius: 50%;
        &:active{
            transition: 1ms;
            transform: scale(1.4);
        }
    }
    &:active{
        animation: ${Spin} 2ms infinite;
    }
`
export const ContText = styled(Offcanvas.Body)`
    &{
        color: var(--color4);
    }
`
// Accordion..........................

export const AccordionFooter = styled(Link)`

    border-top: 1px solid transparent;//..................
    border-bottom: 4px solid var(--color6);//..................
    border-radius: 0!important;
    display: none;
    background-color: transparent!important;
    color: white!important;
    padding: 0!important;
    box-shadow:none!important;
    text-decoration: none;
    &:nth-last-child(1){
        border-bottom: none;//..................
    }
    &:active{
        animation: ${vibrate} 50ms ease-out infinite;
    }
    p{
        font-weight: 700!important;
        /* font-family: var(--Font)!important; */
    }
    svg{
        color: white;
    }
    @media (max-width:1070px) {
        display: block;
    }
    @media (max-width:600px) {
        width: 100%;
    }
`
export const EnlaceDesplegable = styled(Typography)`
&{
    display: flex;
    flex-direction: column;
    
    span{
        /* border: 1px solid white;//.................. */
        color: var(--color4);
        font-weight: 700!important;
        padding: .6em;
        font-weight: 700;
    }
}
`











import styled from "styled-components";
import { LastAnim, animationTextCard } from "./Resources2";


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
export const ContCardsP = styled.div`
    /* border: 1px solid red;//............. */
    display: flex;
    justify-content: center;
    flex-direction: column;
    .animate{
        transition: 1500ms;
        width: 95%;
        height: 50vh;
        border: 4px solid var(--color7);
        
    }
    .close{
        transition: 600ms;
        width: 95%;
        height: 13em;
        border: 4px solid var(--color6);
        
    }
`
export const CardP = styled.div`
    border: 3px solid var(--color7);
    border-radius: .8em;
    cursor:pointer;
    width: 20%;
    margin: .5em;
    height: 60vh;
    .textanim{
        position: absolute;
        /* border: 1px solid red;//................. */
        width: 7em;
        backdrop-filter: blur(3px);
        background-color: var(--color8);
        border-radius: .3em;
        height: calc(14vh + 1em);
        padding: 0 .5em 0 .5em;
        margin-top: 2em;
        -webkit-box-shadow: 0px 0px 15px 0px #000000; 
        box-shadow: 0px 0px 15px 0px #000000;
        color: var(--basico);
        font-size: 3em;
        animation: ${animationTextCard} 1400ms ease-out forwards;
        @media (max-width:420px) {
            font-size: 2em;
        }
        a{
            font-size:.5em;
            text-decoration: none;
            background-color: var(--color7);
            padding: .5em;
            color: var(--basico);
            border-radius: .5em;
            @media (max-width:420px) {
                font-size:.4em;
            }
        }
    }
    .closeText{
        display: none;
    }
`
export const ContImgP = styled.div`
    width: 100%;
    height: 100%;
    border-radius: .8em;
    overflow: hidden;
    img{
        width: 100%;
        object-fit: cover;
        object-position: center center;
        @media (max-width:1000px) {
            height: 100%;
        }
    }
`
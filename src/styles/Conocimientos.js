import styled from "styled-components";
import { LastAnim } from "./Resources2";

export const ContAniCon = styled.section`
    width: 100%;
    height: 100%;
    background: rgb(35,39,47);
    background: radial-gradient(circle, rgba(35,39,47,1) 0%, rgba(94,94,94,1) 0%, rgba(35,39,47,1) 42%); 
`
export const ContConoc = styled.div`
    border: 1px solid red;//.............
    padding-top: 150px ;
    padding-bottom: 50px ;
    width: 90%;
    max-width: 1200px;
    margin: auto;
`
export const TitleConoc = styled.p`
    font-size: clamp(40px, 6vw, 65px);
    font-weight: 900;
    font-family: var(--font1);
    color: var(--color7);
    animation: ${LastAnim} 1000ms ease-out 100ms;
`
export const SubTitleC = styled.p`
    font-size: clamp(20px, 3vw, 35px);
    color: var(--color4);
`
export const ContCardsC = styled.div`
    border: 4px solid var(--color3);
    display: flex;
    padding: 2em 0;
    margin: 1em 0;
`
export const CardsC = styled.div`
    width: 120px;
    height: 150px;
`
export const ContImgC = styled.div`
    border: 1px solid white;
    width: 120px;
    height: 120px;
    padding: 1em;
    border-radius: 50%;
    overflow: hidden;
    background-color: white;
    display: grid;
    place-items: center;
    border: 4px solid var(--color4);
    img{
        width: 100%;
        object-fit:center;
        object-position:center center;
    }
`
export const TextC = styled.p`

`
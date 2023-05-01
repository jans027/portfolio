import styled from "styled-components";
import { LastAnim, sliderShape2 } from "./Resources2";

export const ContAniCon = styled.section`
    width: 100%;
    height: 100%;
    background: rgb(35,39,47);
    background: radial-gradient(circle, rgba(35,39,47,1) 0%, rgba(94,94,94,1) 0%, rgba(35,39,47,1) 42%); 
`
export const ContConoc = styled.div`
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
export const TitleConoc = styled.p`
    font-size: clamp(40px, 6vw, 65px);
    font-weight: 900;
    font-family: var(--font1);
    color: var(--color7);
    animation: ${LastAnim} 1000ms ease-out 100ms;
`
export const SubTitleC = styled.p`
    font-size: clamp(20px, 3vw, 35px);
    color: var(--basico);
`
export const ContCardsC = styled.div`
    border: 4px solid var(--color3);
    background-color: var(--color8);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2em 0;
    margin: 1em 0;
`
export const CardsC = styled.div`
    /* border: 1px solid var(--color3); */
    width:20em;
    height: auto;
    margin: .7em;
    display: flex;
    justify-content: space-between;
    border-radius: .5em;
    background: rgb(76,77,79);
    background: 
            linear-gradient(93deg, rgba(76,77,79,0) 21%, 
            rgba(76,77,79,0.6318181818181818) 31%, 
            rgba(51,54,60,0.8068181818181819) 42%, 
            rgba(35,39,47,1) 58%); 
    
    /* @media (max-width:700px) {
        width:60%;
    } */
    @media (max-width:870px) {
        width:90%;
        &:nth-child(odd){
        flex-direction: row-reverse;
        background: rgb(76,77,79);
        background: 
            linear-gradient(267deg, 
            rgba(76,77,79,0) 21%, 
            rgba(76,77,79,0.6318181818181818) 31%, 
            rgba(51,54,60,0.8068181818181819) 42%, 
            rgba(35,39,47,1) 58%); 
        }
    }
`
export const ContImgC = styled.div`
    content: "";
    width: 100%;
    width: 11em;
    height: 11em;
    background: var(--basico);
    border: 4px solid var(--color4);
    will-change: border-radius, transform, opacity;
    border-radius:35% 35% 70% 56% / 22% 67% 52% 75% ;
    animation: ${sliderShape2} 6s linear infinite;
    -webkit-animation: ${sliderShape2} 6s linear infinite;
    display: block;
    /* z-index: -1; */
    overflow: hidden;
    @media (max-width:1100px) {
        width: 9em;
        height: 9em;
    }
    @media (max-width:450px) {
        width: 6em;
        height: 6em;
    }
    img{
        width: 100%;
        object-fit:center;
        object-position:center;
    }
`
export const TextC = styled.p`
    /* border: 1px solid red;//.................... */
    width: 50%;
    text-align: end;
    display: grid;
    place-items: center;
    font-size: clamp(20px, 2vw, 28px);
    color: var(--color7);
    font-weight: 900;
    margin-right:.5em;
    @media (max-width:450px) {
        text-align: center;
    }
`
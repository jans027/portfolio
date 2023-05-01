import styled from "styled-components";
import { CircleSmallScale } from "./Resourses";

export const ContAnimation = styled.div`
    background: var(--color1);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00adef', endColorstr='#0076e5',GradientType=1 );
    position: relative;
    height: 90vh;
    width: 100%;
    margin: 0px auto;
    padding: 0px auto;
    overflow: hidden;
`
export const ContInside = styled.div`
    /* border: 1px solid red;//................ */
    position: relative;
    min-width: 100vh;
    max-width: 1280px;
    height: 90vh;
    /* min-height: 100vh; */
    margin: 0px auto;
    padding: 0px auto;
    overflow: visible;
`
export const CircleSmall = styled.div`
    -webkit-animation: ${CircleSmallScale} 3s ease-in-out infinite alternate;
    animation: ${CircleSmallScale} 3s ease-in-out infinite alternate;
    animation-timing-function: cubic-bezier(.6, 0, .4, 1);
    animation-delay: 0s;
    position: absolute;
    top: 200px;
    left: -150px;
    background: var(--color6);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    opacity: 0.4;
    @media (max-width:500px) {
        top: 100px;
        left: -50px;
        width: 100px;
        height: 100px;
    }
`
export const CircleMedium = styled.div`
    -webkit-animation: ${CircleSmallScale} 3s ease-in-out infinite alternate;
    animation: ${CircleSmallScale} 3s ease-in-out infinite alternate;
    animation-timing-function: cubic-bezier(.6, 0, .4, 1);
    animation-delay: 0.3s;
    position: absolute;
    top: 50px;
    left: -300px;
    background: var(--color6);
    width: 600px;
    height: 600px;
    border-radius: 50%;
    opacity: 0.3;
    @media (max-width:500px) {
        top: 10px;
        left: -150px;
        width: 300px;
        height: 300px;
    }
`
export const CircleLarge = styled.div`
    -webkit-animation: ${CircleSmallScale} 3s ease-in-out infinite alternate;
    animation: ${CircleSmallScale} 3s ease-in-out infinite alternate;
    animation-timing-function: cubic-bezier(.6, 0, .4, 1);
    animation-delay: 0.6s;
    position: absolute;
    top: -100px;
    left: -450px;
    background: var(--color6);
    width: 900px;
    height: 900px;
    border-radius: 50%;
    opacity: 0.2;
    @media (max-width:500px) {
        top: -50px;
        left: -225px;
        width: 450px;
        height: 450px;
    }
`
export const CircleXLarge = styled.div`
    -webkit-animation: ${CircleSmallScale} 3s ease-in-out infinite alternate;
    animation: ${CircleSmallScale} 3s ease-in-out infinite alternate;
    animation-timing-function: cubic-bezier(.6, 0, .4, 1);
    animation-delay: 0.9s;
    position: absolute;
    top: -250px;
    left: -600px;
    background: var(--color6);
    width: 1200px;
    height: 1200px;
    border-radius: 50%;
    opacity: 0.1;
    @media (max-width:500px) {
        top: -125px;
        left: -300px;
        width: 600px;
        height: 600px;
    }
`
export const CircleXXLarge = styled.div`
    -webkit-animation: ${CircleSmallScale} 3s ease-in-out infinite alternate;
    animation: ${CircleSmallScale} 3s ease-in-out infinite alternate;
    animation-timing-function: cubic-bezier(.6, 0, .4, 1);
    animation-delay: 1.2s;
    position: absolute;
    top: -400px;
    left: -750px;
    background: var(--color6);
    width: 1500px;
    height: 1500px;
    border-radius: 50%;
    opacity: 0.05;
    @media (max-width:500px) {
        top: -200px;
        left: -375px;
        width: 750px;
        height: 750px;
    }
`
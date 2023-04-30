import styled, { keyframes } from "styled-components";


export const Spin = keyframes`
    100% {transform: rotate(360deg);}
`
export const color1 = keyframes`
    0% {color:var(--color7)}
    100% {color:var(--basico)}
`
export const vibrate = keyframes`
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
export const CircleSmallScale = keyframes`
    0% {
        -webkit-transform: scale(1.0);
    }
    100% {
        -webkit-transform: scale(1.2);
    }
`
export const WordsAnimation = keyframes`
    0% { -webkit-transform: scaleY(.6);}
    10% { -webkit-transform: scaleY(1.3);}
    20% { -webkit-transform: scaleY(.7);}
    30% { -webkit-transform: scaleY(1.2);}
    40% { -webkit-transform: scaleY(.8);}
    50% { -webkit-transform: scaleY(1.1);}
    60% { -webkit-transform: scaleY(.9);}
    70% { -webkit-transform: scaleY(1);}
`
export const WordsAnimation2 = keyframes`
    0% { -webkit-transform: scaleX(.6);}
    10% { -webkit-transform: scaleX(1.3);}
    20% { -webkit-transform: scaleX(.7);}
    30% { -webkit-transform: scaleX(1.2);}
    40% { -webkit-transform: scaleX(.8);}
    50% { -webkit-transform: scaleX(1.1);}
    60% { -webkit-transform: scaleX(.9);}
    70% { -webkit-transform: scaleX(1);}
`

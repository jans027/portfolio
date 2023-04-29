import styled, { keyframes } from "styled-components";


export const Spin = keyframes`
    100% {transform: rotate(360deg);}
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
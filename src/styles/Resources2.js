import { keyframes } from "styled-components";


export const LastAnim = keyframes`
    0% {filter: blur(5.5px);}
    5% {filter: blur(4.5px);}
    10% {filter: blur(4.7px);}
    15% {filter: blur(3.5px);}
    20% {filter: blur(3px);}
    25% {filter: blur(2.5px);}
    30% {filter: blur(2px);}
    35% {filter: blur(1.5px);}
    40% {filter: blur(1px);}
    45% {filter: blur(.5px);}
    50% {filter: blur(.10px);}
    55% {filter: blur(.5px);}
    60% {filter: blur(1.5px);}
    65% {filter: blur(2px);}
    70% {filter: blur(2.5px);}
    75% {filter: blur(3px);}
    80% {filter: blur(3.5px);}
    85% {filter: blur(4px);}
    90% {filter: blur(4.5px);}
    95% {filter: blur(5px);}
    100% {filter: blur(1.1px);}
    
`
export const changeColor = keyframes`
    0% {color:var(--basico)}
    50% {color:var(--color4)}
    100% {color:var(--color7)}
`
export const sliderShape2 = keyframes`
    0%,100%{
        border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
        transform: translate3d(0,0,0) rotateZ(0.01deg);
    }
    34%{
        border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
        transform:  translate3d(0,5px,0) rotateZ(0.01deg);
    }
    50%{
        transform: translate3d(0,0,0) rotateZ(0.01deg);
    }
    67%{
        border-radius: 100% 60% 60% 100% / 100% 100% 60% 60% ;
        transform: translate3d(0,-3px,0) rotateZ(0.01deg);
    }
`
export const sliderShape = keyframes`
    0%,100%{
        border-radius: 90% 50% 50% 90% / 90% 90% 50% 50% ;
        transform: translate3d(5px,0,0) rotateZ(0.05deg);
    }
    34%{
        border-radius: 20% 19% 61% 60% / 60% 20% 36% 44%;
        transform:  translate3d(0,5px,0) rotateZ(0.05deg);
    }
    50%{
        transform: translate3d(0,0,0) rotateZ(0.05deg);
    }
    67%{
        border-radius: 32% 48% 60% 20% / 35% 35% 45% 45%;
        transform: translate3d(0,-3px,0) rotateZ(0.05deg);
    }
`
export const animationTextCard = keyframes`
    0%{opacity: 0.1;}
    10%{opacity: 0.2;}
    30%{opacity: 0.3;}
    40%{opacity: 0.4;}
    50%{opacity: 0.5;}
    60%{opacity: 0.6;}
    70%{opacity: 0.7;}
    80%{opacity: 0.9;}
    90%{opacity: 0.9;}
    100%{opacity: 1;}
`
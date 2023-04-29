import { Link } from "react-router-dom";
import styled from "styled-components";


export const ContenedorNavBar = styled.nav`
    /* border: 1px solid red;//..................... */
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100px;
    background: var(--color2);
    display: flex;
    flex-direction: column;
`
export const Direcciones = styled.div`
    /* border: 1px solid red;//..................... */
    padding-top: .2em;
    /* float: right; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`
export const Direcciones1 = styled.div`
    /* border: 1px solid red;//..................... */
    float: right;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    a{
        color: var(--secundario80);
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-left: 1.8em;
        svg{
            font-size: 1.1em;
        }
    }
    @media (max-width: 1050px) {
        display: none;
    }
`
export const LogosRedes = styled.div`
    /* border: 1px solid red;//..................... */
    margin-right: 1em;
    a{
    /* margin-right: .5em; */
    text-decoration: none;
    cursor: pointer;
    margin-left: 1em;
    font-size: 1em;
    font-weight: 500;
    color: var(--secundario80);
    svg{
        font-size: 1.1em;
        }
    }
    img{
        width: 1.4em;
        /* margin: .5em 0 0 0; */
    }
`
export const LogoPrincipal = styled.div`
    /* border: 1px solid red;//................. */
    display: flex;
    align-items: flex-end;
    justify-content:space-between;
    width: 95%;
    margin: auto;
    padding-bottom: 1em;
    :hover{
        cursor: pointer;
    }
    @media (max-width:1050px) {
        width: 90%;
        justify-content:space-between;
        padding: 0 1.2em;
    }
    img{
        border: 4px solid transparent;//.................
        border-radius: 50%;
        width:3em;
        height: auto;
        &:hover{
            transition: 350ms;
            border: 4px solid var(--color5);//.................
        }
        &:active{
            transition: 50ms;
            border: 4px solid var(--color4);//.................
        }
    }
`
export const MenuBarraNav = styled.div`
    /* border: 1px solid red;//................. */
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    width: 80vw;
    @media (max-width: 1050px) {
        display: none;
    }
`
export const LinkButton = styled(Link)`
    /* border: 1px solid red;//................ */
    padding: 12px;
    border-bottom: 2px solid transparent;
    //animation border bottom
    position: relative;
    color:var(--color4);
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    &:hover {
        transition: 400ms;
        color:var(--basico);
    }
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: var(--color4);
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 300ms ease-in-out;
        }
    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
        transition: 400ms;
    }
    &:active{
            transition: 150ms;
            -webkit-box-shadow: inset 0px 0px 15px 22px var(--color5); 
            box-shadow: inset 0px 0px 15px 22px var(--color5);
        }
`
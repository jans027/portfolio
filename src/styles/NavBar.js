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
        width: 100%;
        justify-content:space-between;
        padding: 0 1.2em;
    }
    img{
        /* border: 1px solid red;//................. */
        width:3em;
        height: auto;
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
export const LinkButton = styled.div`
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
        height: 2px;
        border-radius: 4px;
        background-color: var(--color4);
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
        }
    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
        transition: 400ms;
    }
    &:active{
            transition: 100ms;
            -webkit-box-shadow: 0px 0px 15px 0px #ffffff; 
            box-shadow: 0px 0px 15px 0px #ffffff;
        }
    span{
        
    }
`
// simple dropdown menu whit hover effect
export const DropdownContainer = styled.div`
    /* border: 1px solid red;//........... */
    position: relative;
    display: inline-block;
    border-bottom: 2px solid transparent;
    //animation border bottom
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background-color: var(--secundario);
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
        }
    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }

    &:hover .dropdown-content {
        display: block;
    }
`;
export const DropdownButton = styled.button`
    /* border: 1px solid red;//........... */
    background-color: transparent;
    color: var(--color1);
    padding: 12px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    &:hover {
        color:var(--basico);
    }
`;
export const DropdownContent = styled.div`
    /* border: 1px solid red;//........... */
    display: none;
    position: absolute;
    z-index: 1;
    top: 50px;
    background-color: var(--basico);
    min-width: 290px;
    div{
        /* border: 1px solid red;//............... */
        display: flex;
        flex-direction: column;
        a{
            width: 100%;
            text-decoration: none;
            font-size: 16px;
            font-weight: 700;
            padding: 10px;
            color:var(--terciario);
            border-bottom: 2px solid transparent;
            // animation hover
            box-shadow: inset 0 0 0 0 white;
            transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            &:hover{
                transition: 1s;
                border-bottom: 2px solid var(--secundario);
                /* background-color: var(--terciario40); */
                box-shadow: inset 300px 0 0 0 var(--terciario40);
            }
        }
    }
`;
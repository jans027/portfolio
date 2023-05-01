import styled from "styled-components";
import { LastAnim } from "./Resources2";


export const ContContatc = styled.section`
    width: 100%;
    height: 100%;
    background: rgb(35,39,47);
    background: 
        radial-gradient(circle, 
        rgba(35,39,47,1) 0%, 
        rgba(94,94,94,1) 0%, 
        rgba(35,39,47,1) 42%); 
`
export const ContCont = styled.div`
    /* border: 1px solid red;//............. */
    padding-top: 150px ;
    padding-bottom: 7em;
    width: 80%;
    max-width: 900px;
    margin: 0 auto 3em auto;
    @media (max-width:500px) {
        width: 90%;
    }
`
export const TitleCont = styled.p`
    width: 97%;
    margin: auto;
    font-size: clamp(40px, 6vw, 65px);
    font-weight: 900;
    font-family: var(--font1);
    color: var(--color7);
    animation: ${LastAnim} 1000ms ease-out 100ms;
`
//......Form............................
export const FormContact = styled.div `
    /* border:1px solid blue;//.................. */
    .cont_form_mail {
    form {
      flex-direction: column;
      display: flex;
      /* padding: 1.5em; */
      .firstBlock {
        display: flex;
        @media (max-width:700px) {
          flex-direction: column;
        }
        .asunto{
            width: 100%;
        }
        div {
          width: 50%;
          display: flex;
          flex-direction: column;
          padding: 0 1rem;
          @media (max-width:700px) {
            width: 100%;
          }
        }
      }
      .form_label {
        font-size: clamp(16px, 1.5vw, 26px);
        color: var(--color4);
        padding: 0 0 0.5em 0;
        font-weight: 600;
        span {
          color: red;
          font-size: 20px;
        }
      }
      .form_input,
      select{
        margin-bottom: 1em;
        height: 2.8em;
        border-radius: .7em;
        border: 4px solid var(--basico);
        padding: 0 0 0 0.5em;
        &:invalid {
          /* border: 1px solid red; */
        }
        option:disabled {
          color: transparent;
        }
        &::placeholder {
          color: var(--color4);
        }
        &:focus {
          border: 4px solid var(--color4);
          outline: none;
          &::placeholder {
            color: var(--color8);
          }
        }
      }
      .class_1 {
        margin-bottom: 1em;
        height: 2.8em;
        border-radius: 0.5em;
        border: 4px solid red;
        padding: 0 0 0 0.5em;
        &::placeholder {
          color: rgba(255, 0, 0, 0.623);
        }
        &:focus {
          border: 2px solid var(--color1);
          outline: none;
          &::placeholder {
            color: white;
          }
        }
      }
      input[type="number"] {
        -moz-appearance: textfield; /* Firefox */
      }

      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Estilo para el control personalizado */
      input[type="number"] {
        border: none;
        background: white;
        font-size: 12px;
        width: 100%;
      }

      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        display: none;
      }
    }
    .secondForm {
      /* border: 1px solid red;//...................... */
      display: flex;
      flex-direction: column;
      width: 96%;
      margin: auto;
    }
  }
`
export const TextArea = styled.textarea `
    margin-bottom: 1em;
    border-radius: .7em;
    border: 4px solid var(--basico);
    padding: 1em;
    option:disabled {
        color: transparent;
    }
    &::placeholder {
        color: var(--color7);
    }
    &:focus {
        border: 4px solid var(--color4);
        outline: none;
        &::placeholder {
            color: var(--color8);
        }
    }
`
export const BtnFormContact = styled.div`
  /* border: 1px solid red;//...................... */
    width: 100%;
    text-align: center;
    padding: .5em 0;
    button {
        background-color: var(--color7);
        border: 3px solid var(--color3);
        color: var(--basico);
        padding: .2em 1em;
        width: 25%;
        border-radius: 5px;
        cursor: pointer;
        font-size: 25px;
        font-weight: 900;
        @media (max-width:700px) {
                width: 80%;
            }
        &:hover {
            background-color: var(--color4);
        }
        &:active {
            border: 3px solid var(--color4);
            color: var(--color6);
        }
    }
`
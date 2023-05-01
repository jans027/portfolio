import React, { useRef, useState } from 'react'
import styled from "styled-components";
// toastify alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// consecutive number
import { v4 as uuidv4 } from 'uuid';
import { data } from '../data/Data';
import { BtnFormContact, FormContact, TextArea } from '../styles/Contacto';


const ContactForm = (props) => {

    // const 
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SERVICE_URL = `${process.env.REACT_APP_SERVICE_URL}`;
    const DESTINATION_MAIL = `${process.env.REACT_APP_DESTINATION_MAIL}`;
    const SEND_MAIL = `${process.env.REACT_APP_SEND_MAIL}`;

    // ...dinamic class name
    const [classAlert0, setClassAlert0] = useState('form_input')
    const [classAlert1, setClassAlert1] = useState('form_input')
    const [classAlert2, setClassAlert2] = useState('form_input')
    const [classAlert3, setClassAlert3] = useState('form_input')

    // ...avoid copy & paste action
    const handleCutCopyPaste = (event) => {
        event.preventDefault();
    };

    //...clean form after send form
    const formRef = useRef();

    // errors in input
    const [isErrorName, setErrorName] = useState(false)
    const [isErrorAsunto, setErrorAsunto] = useState(false)
    const [isErrorMail, setErrorMail] = useState(false)
    // console.log(isErrorName)

    const LabelName = styled.label`
        color: ${isErrorName === true ? 'red' : 'black'};
    `;
    const LabelAsunto = styled.label`
        color: ${isErrorAsunto === true ? 'red' : 'black'};
    `;
    const LabelMail = styled.label`
    color: ${isErrorMail === true ? 'red' : 'black'};
    `;

    const handleFocus = () => {
        setClassAlert0('form_input')
        setClassAlert1('form_input')
        setClassAlert2('form_input')
        setClassAlert3('form_input')
        setErrorName(false)
        setErrorAsunto(false)
        setErrorMail(false)
    };
    //.......................................

    const sendEmail = async (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);
        const dataForm = Object.fromEntries(formData.entries());

        // regex input name
        const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
        const isValidName = nameRegex.test(dataForm.name);
        const isValidAsunto = nameRegex.test(dataForm.asunto);

        // ...regex input email
        const emailRegex = /^(([^<>() [\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail = emailRegex.test(dataForm.email);

        if ( //Nombre............
            dataForm.name.trim() === "" ||
            dataForm.name === null ||
            dataForm.name.length === 0 ||
            isValidName !== true
        ) {
            setClassAlert0('class_1');
            setErrorName(true)
            console.log('nombre error......')

        } else if ( //Asunto...........
            dataForm.asunto.trim() === "" ||
            dataForm.asunto === null ||
            dataForm.asunto.length === 0 ||
            isValidAsunto !== true
        ) {
            setClassAlert1('class_1');
            setErrorAsunto(true)
            console.log('asunto error......')

        } else if (// e mail..............
            dataForm.email.trim() === "" ||
            dataForm.email === null ||
            dataForm.email.length === 0 ||
            isValidEmail !== true
        ) {
            setErrorMail(true)
            setClassAlert3('class_1');
            console.log('email error......')

        } else {
            // console.log(event.target.value)

            const url = SERVICE_URL;
            const Nombre = 'CONTACTO';
            //we get consecutive number to generate a different conversation email each time
            const messageId = uuidv4().slice(0, 8);

            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': API_KEY
                },
                body: JSON.stringify({
                    sender: { name: Nombre, email: SEND_MAIL },
                    to: [{ email: DESTINATION_MAIL }],
                    subject: messageId,
                    htmlContent:
                        `
                        Nombre : ${dataForm.name}
                        <br><br>
                        Numero de Cedula : ${dataForm.cedula}
                        <br><br>
                        Telefono : ${dataForm.phone}
                        <br><br>
                        E-Mail : ${dataForm.email}
                        <br><br>
                        Solicitud : ${dataForm.seleccion}
                        <br><br>
                        Comentario : ${dataForm.comentario}
                    `
                })
            })
                .then(response => {
                    if (response.ok) {
                        // throw new Error('La petición ha fallado!')
                        return response.json()
                            .then(data =>
                                // console.log(data),
                                formRef.current.reset(),// clean form
                                toast.success('En breve nos pondremos en contacto contigo!', {// alert message
                                    position: "top-center",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                })
                            )
                            .catch(error => console.error(error));
                    } else {
                        // throw new Error('La petición ha fallado!')
                        console.log(response.status)
                        toast.error('No se pudo Enviar tu solicitud, Intentalo mas tarde!', {// alert message
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                    }
                })
                .catch(error =>
                    console.log(error),
                    formRef.current.reset(),// clean form
                );
        }

    };


    return (
        <FormContact>
            <div className='cont_form_mail'>
                <form ref={formRef} onSubmit={sendEmail}>

                    <div className='firstBlock'>
                        <div>
                            <LabelName className='form_label'>{isErrorName === true ? 'Nombre No Valido' : 'Nombre Completo'}<span>*</span></LabelName>
                            <input
                                className={classAlert0}
                                type="text"
                                placeholder='Nombre'
                                name="name"
                                id="name"
                                required
                            />
                        </div>

                        <div>
                            <LabelMail className='form_label'>{isErrorMail === true ? 'E-mail Invalido' : 'E-mail'}<span>*</span></LabelMail>
                            <input
                                className={classAlert3}
                                type="email"
                                placeholder='usuario@correo.com'
                                name="email"
                                id="email"
                                required
                            />
                        </div>
                    </div>


                    <div className='firstBlock'>
                        <div className='asunto'>
                            <LabelAsunto  className='form_label'>{isErrorAsunto === true ? 'Asunto No Valido' : 'Asunto'}<span>*</span></LabelAsunto>
                            <input
                                className={classAlert1}
                                type="text"
                                placeholder='Asunto'
                                name="asunto"
                                id="asunto"
                                required
                            />
                        </div>
                    </div>

                    <div className='secondForm'>
                        <LabelName className='form_label'>Mensaje<span>*</span></LabelName>
                        <TextArea
                            rows="5"
                            placeholder='Escribe aqui tu mensaje'
                            required
                            name="comentario">
                        </TextArea>

                        <BtnFormContact>
                            <button
                                type="submit"
                                value="Enviar"
                                onFocus={handleFocus}
                            >Enviar
                            </button>
                        </BtnFormContact>
                    </div>

                    <ToastContainer />
                </form>
            </div>

        </FormContact>
    );
}
export default ContactForm;
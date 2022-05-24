import React from "react";
import { Logo } from "../../Components/Logo/Logo";
import eye from './images/eye.svg';
import '../Login/login.css';

export const Login = () => {
    return(
        <section className='Login'>
            <h4>Bienvenido</h4>
            <Logo/>
            <input type='email' id='Email' placeholder="Email"/>
            <input type='password' id='Password' placeholder="Contraseña"/>
            <button id='mask'> <img src={eye} alt='Burger Queen'/></button>
            <button id='getInto'>Ingresar</button>
        </section>
    );
}

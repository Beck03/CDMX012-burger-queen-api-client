import React from "react";
import burgerQueen from './images/burgerQueen.svg'
import eye from './images/eye.svg';
import '../Login/login.css';

export const Login = () => {
    return(
        <section className='Login'>
            <h4>Bienvenido</h4>
            <img src={burgerQueen} alt='Burger Queen' id='BurgerQueen'/>
            <input type='email' id='Email' placeholder="Email"/>
            <input type='password' id='Password' placeholder="Contraseña"/>
            <button id='mask'> <img src={eye} alt='Burger Queen'/></button>
            <button id='getInto'>Ingresar</button>
        </section>
    );
}

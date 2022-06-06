import React  from 'react';

import mesero from '../../Components/images/mesero.svg'
import './provisional.css'

const Waiter = ({logOut}) => {
    return(
        <section className='Home'>
            <img src={mesero} alt='mesero' id='construccion'/>
            <button id='logOut' onClick={logOut}>Cerrar Sesión</button>
        </section>
    );
}

export default Waiter;
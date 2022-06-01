import { useEffect } from 'react';
import mesero from '../../components/images/mesero.svg'
import './provisional.css'

const Waiter = ({logOut}) => {
useEffect(() => {
    fetch('http://localhost:3001/productos')
    .then(res =>{
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
}, [])
    return(
        <section className='Home'>
            <img src={mesero} alt='mesero' id='construccion'/>
            <button id='logOut' onClick={logOut}>Cerrar Sesión</button>
        </section>
    );
}

export default Waiter;
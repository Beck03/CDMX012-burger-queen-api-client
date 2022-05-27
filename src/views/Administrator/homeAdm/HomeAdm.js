//import { Logo } from "../../../Components/Logo/Logo";
import burgerQueen from '../../Login/images/burgerQueen.svg'
import '../homeAdm/homeAdm.css';

export const HomeAdm = ({logOut}) => {
    return(
        <section className='homeAdm'>
             <img src={burgerQueen} alt='Burger Queen logo'id='BurgerQueen' />
             <h4>Gerencia</h4>
             <button id='btnProducts' onClick={logOut}>Salir</button>
             <button id='btnAssociates' >Asociados</button>
        </section>
    );
}

export default HomeAdm;
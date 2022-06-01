//import { Logo } from "../../../Components/Logo/Logo";
import burgerQueen from '../../Login/images/burgerQueen.svg'
import '../homeAdm/homeAdm.css';
import { useNavigate } from "react-router-dom";

export const HomeAdm = ({logOut}) => {
    const navigate = useNavigate();

    const partners = () =>{
        navigate('/AddPartners')
    }
    
    return(
        <section className='homeAdm'>
             <img 
             src={burgerQueen} 
             alt='Burger Queen logo'
             id='BurgerQueen' 
             />
             <h2>Gerencia</h2>
             <button 
             id='btnProducts' 
             onClick={logOut}
             >
             Salir
             </button>
             <button 
             id='btnAssociates' 
             onClick={partners}
             >
             Asociados
             </button>
        </section>
    );
}

export default HomeAdm;
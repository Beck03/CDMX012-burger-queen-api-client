import icoBurgerQueen from '../../../components/images/icoBurgerQueen.svg';
import plus from '../../../components/images/Plus.svg'
import '../../Administrator/addPartners/AddPartnes.css'
import { useNavigate } from "react-router-dom";

export const AddPartners = () => {
   const navigate = useNavigate();

    const partners = () =>{
        navigate('/RecordAsso')
    }
    return(
        <section className='addPartners'>
         <div className='header'>
            <img src={icoBurgerQueen} alt='Burger Queen' id='icoBurgerQueen'/>
            <button id='products'>Alimentos</button>
         </div>
         <button id='plusPartners' onClick={partners}> <img src={plus} alt='Mas' id='Plus'/></button>
        </section>
    );
}
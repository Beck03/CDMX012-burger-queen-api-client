import icoBurgerQueen from '../../../Components/images/icoBurgerQueen.svg';
import plus from '../../../Components/images/Plus.svg'
import '../../Administrator/addPartners/AddPartnes.css'

export const AddPartners = () => {
    return(
        <section className='addPartners'>
         <div className='header'>
            <img src={icoBurgerQueen} alt='Burger Queen' id='icoBurgerQueen'/>
            <button id='products'>Alimentos</button>
         </div>
         <button id='plusPartners'> <img src={plus} alt='Mas' id='Plus'/></button>
        </section>
    );
}
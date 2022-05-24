import icoBurgerQueen from '../../../Components/images/icoBurgerQueen.svg';


export const RecordAsso = () => {
    return(
        <section className='RecordAsso'>
         <div className='header'>
            <img src={icoBurgerQueen} alt='Burger Queen' id='icoBurgerQueen'/>
            <button id='products'>Alimentos</button>
         </div>
         <button id='record'></button>
        </section>
    );
}
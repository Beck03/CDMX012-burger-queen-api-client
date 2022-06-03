import icoBurgerQueen from '../../../components/images/icoBurgerQueen.svg';
import plus from '../../../components/images/Plus.svg';
import '../../Administrator/addPartners/AddPartnes.css'
import { useNavigate } from "react-router-dom";
import { Associate } from '../../../components/associate/Associate.js';

export const AddPartners = () => {
  const navigate = useNavigate();

  const partners = () => {
    navigate('/RecordAsso')
  }

  return (
    <section className='addPartners'>
      <div className='header'>
        <img
          src={icoBurgerQueen}
          alt='Burger Queen'
          id='icoBurgerQueen'
        />
        <button
          id='products'
          onClick={() => navigate('/Products')}
        >
          Alimentos
        </button>
      </div>
      <h3>Asociados</h3>
      <section id='listaDeAsociados'>
        <div id='tarjetaCategory'>
          <div><h5>Nombre</h5></div>
          <div><h5>Puesto</h5></div>
        </div>
        <Associate />
      </section>
      <button
        id='plusPartners'
        onClick={partners}
      >
        <img
          src={plus}
          alt='Mas'
          id='Plus'
        />
      </button>
    </section>
  );
}
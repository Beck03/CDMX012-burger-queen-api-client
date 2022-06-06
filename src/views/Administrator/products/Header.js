import '../products/Header.css';
import icoBurgerQueen from '../../../components/images/icoBurgerQueen.svg';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  return (
    <article>
      <div className='header'>
        <img
          src={icoBurgerQueen}
          alt='Burger Queen'
          id='icoBurgerQueen'
          onClick={() => navigate('/')}
        />
        <button
          className='employees'
          onClick={() => navigate('/AddPartners')}
        >Asociados
        </button>
      </div>
    </article>
  )
}


export default Header
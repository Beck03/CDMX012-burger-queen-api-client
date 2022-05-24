import { Logo } from "../../../components/Logo/Logo";
import '../homeAdm/homeAdm.css';
import { useNavigate } from "react-router-dom";

const HomeAdm = ({logOut}) => {
    const navigate = useNavigate();

    const partners = () =>{
        navigate('/AddPartners')
    }
    
    return(
        <section className='homeAdm'>
            <Logo/>
             <button id='btnProducts' onClick={logOut}>Productos</button>
             <button id='btnAssociates' onClick={partners}>Asociados</button>
        </section>
    );
}

export default HomeAdm;
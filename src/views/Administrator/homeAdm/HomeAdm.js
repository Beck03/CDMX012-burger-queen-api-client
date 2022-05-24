import { Logo } from "../../../Components/Logo/Logo";
import '../homeAdm/homeAdm.css';
import { useNavigate } from "react-router-dom";

export const HomeAdm = () => {
    const navigate = useNavigate();

    const partners = () =>{
        navigate('/AddPartners')
    }
    
    return(
        <section className='homeAdm'>
            <Logo/>
             <button id='btnProducts'>Productos</button>
             <button id='btnAssociates' onClick={partners}>Asociados</button>
        </section>
    );
}
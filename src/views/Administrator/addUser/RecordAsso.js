import icoBurgerQueen from '../../../components/images/icoBurgerQueen.svg';
import back from '../../../components/images/back.svg'

export const RecordAsso = () => {
    return(
        <section className='RecordAsso'>
         <div className='header'>
            <img src={icoBurgerQueen} alt='Burger Queen' id='icoBurgerQueen'/>
            <button id='back'><img src={back} alt='Volver' id='backImg'/></button>
         </div>
         <div>
         <label className='labelName'>Nombre</label>
         <input type='text' id='name' placeholder='Ej. Amaya de Esesarte'/>
         <label className='labelEmail'>Correo</label>
         <input type='e-mail' id='email' placeholder='Ej. amaya@burgerqueen.com'/>
         <label className='labelPassword'>Contraseña</label>
         <input type='text' id='password' placeholder='Ej. ama1234'/>
         <label className='labelAge'>Edad</label>
         <input type='text' id='Age' placeholder='Ej. 24'/>
         <label className='labelPhone'>Telefono</label>
         <input type='text' id='Phone' placeholder='Ej. 55 36 56 95 12'/>
         <label className='labelEmergency'>Contacto de emergencia</label>
         <input type='text' id='Emergency' placeholder='Ej. Mariana  55 36 56 95 12'/>
         <label className='labelDate'>Fecha de ingreso</label>
         <input type='text' id='Date' placeholder='Ej. 25 - 05 -2022'/>
         <label className='labelContract'>Tipo de contrato</label>
         <input type='text' id='Contract' placeholder='Ej. Tiempo completo'/>
         <label className='labelTime'>Horario</label>
         <input type='text' id='Time' placeholder='Ej. 8:00 - 16:00'/>
         </div>
         <button id='record'>Dar de alta</button>
        </section>
    );
}
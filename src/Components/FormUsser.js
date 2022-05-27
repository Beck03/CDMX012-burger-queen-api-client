import './formUsser.css'

export const FormUsser = () => {
    return(

<div className='form'>
<label className='labelName'>Nombre</label>
<input type='text' id='name' placeholder='Ej. Amaya de Esesarte'/>
<label className='labelEmail'>Correo</label>
<input type='e-mail' id='email' placeholder='Ej. amaya@burgerqueen.com'/>
<label className='labelPassword'>Contraseña</label>
  <div className='check'>
    <label><input type="checkbox" className='category' value="Jefe de Cocina"/> Jefe de cocina</label>
    <label><input type="checkbox" className='category' value="Cocinero"/> Cocinero</label>
    <label><input type="checkbox" className='category' value="Jefe de Meseros"/> Jefe de Meseros</label>
    <label><input type="checkbox" className='category' value="Meseros"/> Meseros</label>
  </div>
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
   
   
   )
}
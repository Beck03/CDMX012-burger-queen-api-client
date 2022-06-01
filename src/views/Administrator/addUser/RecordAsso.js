import icoBurgerQueen from '../../../components/images/icoBurgerQueen.svg';
import back from '../../../components/images/back.svg'
import '../addUser/recordAsso.css';
import { auth } from '../../../lib/firebaseAuth';
import { db } from '../../../lib/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const RecordAsso = () => {

async function registerAssociate (email, password, name, age, phone, contEmergency, contract, time ){
    
    const dataAssociate = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password).then((userFirebase) =>{
        return userFirebase;
        
    });
        console.log(dataAssociate);

        const docRef = doc(db,  `empleados/${dataAssociate.user.uid}`)
        setDoc(docRef,{
            uid: dataAssociate.user.uid,
            email, 
            password, 
            name, 
            age, 
            phone, 
            contEmergency, 
            contract, 
            time
        });
    }

    function submitHandler (e){
        e.preventDefault()
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const name = e.target.elements.name.value;
        const age = e.target.elements.Age.value;
        const phone = e.target.elements.Phone.value;
        const contEmergency = e.target.elements.Emergency.value;
        const contract = e.target.elements.Contract.value;
        const time = e.target.elements.Time.value;
        console.log( name);
        console.log(email);
        console.log( password);
        console.log(age);
        console.log(phone);
        console.log(contEmergency);
        console.log(contract);
        console.log(time);
        registerAssociate(email, password, name, age, phone, contEmergency, contract, time)
}

    return(
        <section className='RecordAsso'>
           <div className='header'>
             <img 
             src={icoBurgerQueen} 
             alt='Burger Queen' 
             id='icoBurgerQueen'
             />
             <button 
             id='back'
             >
             <img 
             src={back} 
             alt='Volver' 
             id='backImg'
             />
             </button>
           </div>
        <h3>Alta de Asociado</h3>
          <form className='form' onSubmit={submitHandler}>
                <label className='labelName'>Nombre</label>
                <input type='text' id='name' placeholder='Ej. Amaya de Esesarte'/>
                <label className='labelEmail'>Correo</label>
                <input type='e-mail' id='email' placeholder='Ej. amaya@burgerqueen.com'/>
                <label className='labelPassword'>Contraseña</label>
                <input type='text' id='password' placeholder='Ej. ama1234'/>
                <div className='check'>
                    <label><input type="checkbox" className='category' value="Jefe de Cocina"/> Jefe de cocina</label>
                    <label><input type="checkbox" className='category' value="Cocinero"/> Cocinero</label>
                    <label><input type="checkbox" className='category' value="Jefe de Meseros"/> Jefe de Meseros</label>
                    <label><input type="checkbox" className='category' value="Meseros"/> Meseros</label>
                </div>
               
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
                <button id='record' type='submit'>Dar de alta</button>
            </form>
                
   
         
        </section>
    );
}
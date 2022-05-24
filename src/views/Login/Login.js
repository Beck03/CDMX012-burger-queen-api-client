import { useState } from "react";
import burgerQueen from './images/burgerQueen.svg'
//import { Logo } from "../../Components/Logo/Logo";
import eye from './images/eye.svg';
import '../Login/Login.css';

const Login = ({ signIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState('password')

  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleEyeIcon = () => {
    if (visible === 'password') {
      setVisible('text')
    } else if (visible === 'text') {
      setVisible('password')
    }
  }

  return (
    <section className='Login'>
      <h4>Bienvenido</h4>
      <img
        src={burgerQueen}
        alt='Burger Queen logo'
        id='BurgerQueen'
      />
      <input
        type='email'
        id='Email'
        name='email'
        placeholder="Email"
        onChange={handleEmail}
      />
      <input
        type={visible}
        id='Password'
        name='password'
        placeholder="Contraseña"
        onChange={handlePassword}
      />
      <button
        id='mask'>
        <img
          src={eye}
          alt='Eye icon'
          onClick={handleEyeIcon}
        />
      </button>
      <button
        id='getInto'
        onClick={() => signIn(email, password)}>
        Ingresar
      </button>
    </section>
  );
}

export default Login;
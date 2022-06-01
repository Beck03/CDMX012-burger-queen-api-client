import { useState } from "react";
import burgerQueen from './images/burgerQueen.svg'
import eye from '../../components/images/eye.svg';
import '../Login/Login.css';

const Login = ({ signIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState('password')
  const [message, setMessage] = useState('')

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
  const access = async () => {
    const response = await signIn(email, password);
    if (response && response.hasOwnProperty('code')) {
      // console.log(response.code)
      switch (response.code) {
        case "auth/invalid-email":
          setMessage("El correo es inválido.");
          break;
        case "auth/user-not-found":
          setMessage("El correo no está registrado");
          break;
        case "auth/wrong-password":
          setMessage("La contraseña es inválida");
          break;
        default:
          setMessage(response.code);
      }
    }
  }

  return (
    <section className='Login'>
      <img
        src={burgerQueen}
        alt='Burger Queen logo'
        id='BurgerQueen'
      />
      <h2>Bienvenido</h2>
      <input
        type='email'
        id='Email'
        name='email'
        placeholder="Email"
        onChange={handleEmail}
      />
      <section className='pswrdGroup'>
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
      </section>
      <p data-testid='errorMessage'>
        {message}
      </p>
      <button
        id='loginBtn'
        onClick={access}>
        Ingresar
      </button>
    </section>
  );
}

export default Login;
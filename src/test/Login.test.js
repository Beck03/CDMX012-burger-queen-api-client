import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../views/Login/Login'

describe('Login view renders elements', () => {

  test('renders Burger Queen logo', () => {
    render(<Login />);
    const bqLogo = screen.getByAltText(/Burger Queen logo/i);
    expect(bqLogo).toBeInTheDocument();
  });

  test('renders welcoming phrase', () => {
    render(<Login />);
    const welcomeText = screen.getByText(/Bienvenido/i);
    expect(welcomeText).toBeInTheDocument();
  });

  test('renders email input', () => {
    render(<Login />);
    const email = screen.getByPlaceholderText(/Email/i);
    expect(email).toBeInTheDocument();
  });

  test('renders password input', () => {
    render(<Login />);
    const password = screen.getByPlaceholderText(/Contraseña/i);
    expect(password).toBeInTheDocument();
  });

  test('renders see-password icon', () => {
    render(<Login />);
    const eyeIcon = screen.getByAltText(/Eye icon/i);
    expect(eyeIcon).toBeInTheDocument();
  });

  test('renders sign in buttont', () => {
    render(<Login />);
    const button = screen.getByRole('button', { name: 'Ingresar' });
    expect(button).toBeInTheDocument();
  });

});

describe('Login view works properly', () => {

  test('allows to see password when eye icon is clicked and hides it again when clicked again', () => {
    const signIn = jest.fn().mockImplementation(() => Promise.resolve({ user: 'g1bob@burgerqueen.com' }))
    render(<Login signIn={signIn} />);

    const password = screen.getByPlaceholderText(/Contraseña/i);
    const eyeIcon = screen.getByAltText(/Eye icon/i);

    fireEvent.click(eyeIcon);
    expect(password.type).toBe('text');

    fireEvent.click(eyeIcon);
    expect(password.type).toBe('password');
  });

  test('runs signIn function', () => {
    const signIn = jest.fn().mockImplementation(() => Promise.resolve({ user: 'g1bob@burgerqueen.com' }))
    render(<Login signIn={signIn} />);

    const email = screen.getByPlaceholderText(/Email/i);
    const password = screen.getByPlaceholderText(/Contraseña/i);
    const button = screen.getByRole('button', { name: 'Ingresar' });

    fireEvent.change(email, { target: { value: 'g1bob@burgerqueen.com' } });
    fireEvent.change(password, { target: { value: '1234567890' } });
    fireEvent.click(button);

    expect(signIn).toHaveBeenCalled();
    expect(signIn).toBeCalledWith('g1bob@burgerqueen.com', '1234567890');
  });

  test('renders error messages when email is invalid', async () => {
    const signIn = jest.fn().mockImplementation(() => Promise.resolve({ code: 'auth/invalid-email' }))
    render(<Login signIn={signIn} />);

    const email = screen.getByPlaceholderText('Email');
    const password = screen.getByPlaceholderText('Contraseña');
    const button = screen.getByRole('button', { name: 'Ingresar' });
    const emInvalidEmail = screen.getByTestId('errorMessage');

    fireEvent.change(email, { target: { value: 'g' } });
    fireEvent.change(password, { target: { value: '1234567890' } });
    fireEvent.click(button);

    expect(signIn).toHaveBeenCalled();
    expect(signIn).not.toBeCalledWith('g1bob@burgerqueen.com', '1234567890');

    await waitFor(() => {
      expect(emInvalidEmail.textContent).toContain('El correo es inválido.');
    })
  });

  test('renders error messages when email is not found', async () => {
    const signIn = jest.fn().mockImplementation(() => Promise.resolve({ code: 'auth/user-not-found' }))
    render(<Login signIn={signIn} />);

    const email = screen.getByPlaceholderText('Email');
    const password = screen.getByPlaceholderText('Contraseña');
    const button = screen.getByRole('button', { name: 'Ingresar' });
    const emInvalidEmail = screen.getByTestId('errorMessage');

    fireEvent.change(email, { target: { value: 'g2bob@burgerqueen.com' } });
    fireEvent.change(password, { target: { value: '1234567890' } });
    fireEvent.click(button);

    expect(signIn).toHaveBeenCalled();
    expect(signIn).not.toBeCalledWith('g1bob@burgerqueen.com', '1234567890');

    await waitFor(() => {
      expect(emInvalidEmail.textContent).toContain('El correo no está registrado');
    })
  });

  test('renders error messages when password is invalid', async () => {
    const signIn = jest.fn().mockImplementation(() => Promise.resolve({ code: 'auth/wrong-password' }))
    render(<Login signIn={signIn} />);

    const email = screen.getByPlaceholderText('Email');
    const password = screen.getByPlaceholderText('Contraseña');
    const button = screen.getByRole('button', { name: 'Ingresar' });
    const emInvalidEmail = screen.getByTestId('errorMessage');

    fireEvent.change(email, { target: { value: 'g1bob@burgerqueen.com' } });
    fireEvent.change(password, { target: { value: '1234567' } });
    fireEvent.click(button);

    expect(signIn).toHaveBeenCalled();
    expect(signIn).not.toBeCalledWith('g1bob@burgerqueen.com', '1234567890');

    await waitFor(() => {
      expect(emInvalidEmail.textContent).toContain('La contraseña es inválida');
    })
  });

})
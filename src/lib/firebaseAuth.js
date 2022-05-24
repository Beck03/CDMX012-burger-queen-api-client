import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebaseConfig";

export const auth = getAuth(app);

const errorTranslate = {
  'auth/invalid-email': 'El email es inválido.',
  'auth/email-already-in-use': 'El email ya está registrado.',
  'auth/weak-password': 'La contraseña es inválida',
  'auth/wrong-password': 'La contraseña es incorrecta',
  'auth/user-not-found': 'El usuario no existe',
};

export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //const user = userCredential.user;
      console.log('se ha registrado exitosamente')
    })
    .catch((error) => {
      const errorType = error.code
      alert(errorTranslate[errorType])
      console.log(error.code)
      console.log(error.message)
      // const errorCode = error.code;
      // const errorMessage = error.message;
    });
}

export const logOut = () => {
  signOut(auth).then(() => {
    console.log('Ha salido de sesión')
  }).catch((error) => {
    console.log(error)
  });
}
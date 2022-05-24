import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Manager from '../views/Home/Manager';
import Waiter from '../views/Home/Waiter';
import Chef from '../views/Home/Chef';
import { auth, logOut } from '../lib/firebaseAuth.js'
import { onAuthStateChanged } from 'firebase/auth';

const PrivateRoutes = () => {
  const [role, setRole] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userEmail = user.email
      const initial = userEmail[0]
      if (initial === 'g') {
        setRole('gerente')
      } else if (initial === 'm') {
        setRole('mesero')
      } else if (initial === 'c') {
        setRole('cocinero')
      }
    }
  });

  if (role === 'gerente') {
    return (
      <Routes>
        <Route path='/' element={<Manager logOut={logOut} />} />
      </Routes>
    )
  } else if (role === 'mesero') {
    return (
      <Routes>
        <Route path='/' element={<Waiter logOut={logOut} />} />
      </Routes>
    )
  } else if (role === 'cocinero') {
    return (
      <Routes>
        <Route path='/' element={<Chef logOut={logOut} />} />
      </Routes>
    )
  }
}

export default PrivateRoutes;
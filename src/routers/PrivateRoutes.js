import { useState } from 'react';
import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeAdm } from '../views/Administrator/homeAdm/HomeAdm.js'
import { AddPartners } from '../views/Administrator/addPartners/AddPartners.js'
import Waiter from '../views/Home/Waiter';
import Chef from '../views/Home/Chef';
import { auth, logOut } from '../lib/firebaseAuth.js'
import { onAuthStateChanged } from 'firebase/auth';
import { RecordAsso } from '../views/Administrator/addUser/RecordAsso.js';
import { EditDeleteAsso } from '../Components/associate/EditDeleteAsso.js';

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
        <Route path='/' element={<HomeAdm logOut={logOut} />} />
        <Route path='/AddPartners' element={<AddPartners/>} />
        <Route path='/RecordAsso' element={<RecordAsso/>} />
        <Route path='/EditDeletAsso/:id' element={<EditDeleteAsso/>} />
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
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Note from '../components/Note';
import Create from '../components/Create';
import Home from '../components/Home';
import Base from '../components/Base';
import { logout } from '../lib/firebaseAuth.js'
// import { BrowserRouter as Router } from "react-router-dom";


const PrivateRoutes = () => {
  const [role, setRole] = useState('')

  return (
    <section>
        <Base logout={logout} />
        <Routes>
          <Route path='/manager' element={<Home />} />
          <Route path='/waiter' element={<Create />} />
          <Route path='/chef' element={<Create />} />
          <Route path='/note/:id' element={<Note />} />
        </Routes>
    </section>
  )
}

export default PrivateRoutes
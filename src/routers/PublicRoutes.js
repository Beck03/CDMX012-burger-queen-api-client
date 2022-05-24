import { Route, Routes } from "react-router-dom"
import Login from '../views/Login/Login';
import { signIn } from '../lib/firebaseAuth.js'

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login signIn={signIn} />} />
      {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
    </Routes>
  )
}

export default PublicRoutes;
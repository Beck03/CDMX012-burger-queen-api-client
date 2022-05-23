//import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import Login from '../views/Login/Login.js';
import { signIn } from '../lib/firebaseAuth.js'


const PublicRoutes = () => {
    //const [darkMode, setDarkMode] = useState(false)
    return (
        <section>
            <Routes>
                <Route path='/' element={<Login signIn={signIn} />} />
                {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
            </Routes>
        </section>
    )
}

export default PublicRoutes;
import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import { Login } from "../components/Login"
import { signIn } from '../lib/firebaseAuth.js'


const PublicRoutes = () => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <section className={`${darkMode && 'dark-mode'}`}>
            <Routes>
                <Route path='/' element={<Login signIn={signIn} setDarkMode={setDarkMode} darkMode={darkMode} />} />
                {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
            </Routes>
        </section>
    )
}

export default PublicRoutes
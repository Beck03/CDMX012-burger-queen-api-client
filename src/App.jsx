import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./views/Login/Login.js";
import { HomeAdm } from "./views/Administrator/homeAdm/HomeAdm.js";
import { AddPartners } from "./views/Administrator/addPartners/AddPartners.js";
import { RecordAsso } from "./views/Administrator/addUser/RecordAsso.js";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/HomeAdm' element={<HomeAdm/>} />
        <Route path='/AddPartners' element={<AddPartners/>} />
        <Route path='/RecordAsso' element={<RecordAsso/>} />
      </Routes>
     </BrowserRouter>
  );
}


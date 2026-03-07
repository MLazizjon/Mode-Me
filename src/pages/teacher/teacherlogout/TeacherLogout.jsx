import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Guruh1 from '../guruh1/Guruh1';
import Guruh2 from '../guruh2/Guruh2';
import Guruh3 from '../guruh3/Guruh3';
import Ishhaqi from '../salarry/Ishhaqi';
import Profil from '../profil/Profil';
// import './App.css';
import { GiPrivate } from 'react-icons/gi';

const App = () => {
  const [g1Students, setG1Students] = useState([]);
  const [g2Students, setG2Students] = useState([]);
  const [g3Students, setG3Students] = useState([]);
  return (
    <div className="app">

      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Guruh1 />} />
        <Route path='/guruh2' element={<Guruh2 />} />
        <Route path='/guruh3' element={<Guruh3 />} />
        <Route path='/ishhaqi' element={<Ishhaqi />} />
        <Route path='/profil/:guruhId/:studentId' element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;


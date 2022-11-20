import { useState } from 'react'
import './App.css'
import {_} from '@codeborne/i18n-json'
import LangSelect from './components/LangSelect'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Elu from './pages/Elu';
import Lisaks from './pages/Lisaks';
import Mottemallid from './pages/Mottemallid';
import Vabameenutamine from './pages/Vabameenutamine';
import Hajutatudope from './pages/Hajutatudope';
import Vahelduvope from './pages/Vahelduvope';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/elu' element={<Elu/>}/>
        <Route path='/lisaks' element={<Lisaks/>} />
        <Route path='/vabameenutamine' element={<Vabameenutamine/>} />
        <Route path='/mottemallid' element={<Mottemallid/>} />
        <Route path='/hajutatudope' element={<Hajutatudope/>} />
        <Route path='/vahelduvope' element={<Vahelduvope/>} />
      </Routes>
      <div className="App" s>
        <LangSelect/>
        <p>{(_('title'))}</p>
      </div>
      
      <Footer/>
      
    </Router>
    
  );
};

export default App

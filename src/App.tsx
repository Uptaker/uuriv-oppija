import './App.css'
import {_} from '@codeborne/i18n-json'
import LangSelect from './components/LangSelect'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Elu from './pages/Elu'
import Lisaks from './pages/Lisaks'
import Mottemallid from './pages/Mottemallid'
import Vabameenutamine from './pages/Vabameenutamine'
import Hajutatudope from './pages/Hajutatudope'
import Vahelduvope from './pages/Vahelduvope'
import Nav from './layout/Nav'
import Footer from './layout/Footer'


function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/elu' element={<Elu/>}/>
        <Route path='/lisaks' element={<Lisaks/>}/>
        <Route path='/vabameenutamine' element={<Vabameenutamine/>}/>
        <Route path='/mottemallid' element={<Mottemallid/>}/>
        <Route path='/hajutatudope' element={<Hajutatudope/>}/>
        <Route path='/vahelduvope' element={<Vahelduvope/>}/>
      </Routes>
      <div className="App">
        <LangSelect/>
        <p>{(_('title'))}</p>
      </div>

      <Footer/>

    </Router>

  );
}

export default App

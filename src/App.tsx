import './App.css'
import {_} from '@codeborne/i18n-json'
import LangSelect from './components/LangSelect'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Elu from './pages/Elu'
import Lisaks from './pages/Lisaks'
import Nav from './layout/Nav'
import Footer from './layout/Footer'
import StrategyPage from './pages/StrategyPage'


function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/elu' element={<Elu/>}/>
        <Route path='/lisaks' element={<Lisaks/>}/>
        <Route path='strategy/:id' element={<StrategyPage/>}/>
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

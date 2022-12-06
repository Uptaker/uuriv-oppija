import './App.css'
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
        <Route path='/about' element={<Lisaks/>}/>
        <Route path='strategy/:id' element={<StrategyPage/>}/>
      </Routes>
      <Footer/>

    </Router>

  );
}

export default App

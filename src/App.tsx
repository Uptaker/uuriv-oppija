import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import EluPage from './pages/EluPage'
import LearnMorePage from './pages/LearnMorePage'
import Nav from './layout/Nav'
import Footer from './layout/Footer'
import StrategyPage from './pages/StrategyPage'


function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/elu' element={<EluPage/>}/>
        <Route path='/learn-more' element={<LearnMorePage/>}/>
        <Route path='strategy/:id' element={<StrategyPage/>}/>
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App

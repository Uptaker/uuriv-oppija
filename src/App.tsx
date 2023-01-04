import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import EluPage from './pages/EluPage'
import LearnMorePage from './pages/LearnMorePage'
import Nav from './layout/Nav'
import Footer from './layout/Footer'
import StrategyPage from './pages/StrategyPage'
import StudyingPage from './pages/StudyingPage'
import {BASE_URL} from '../config'


function App() {
  return (
    <Router basename={BASE_URL}>
      <Nav />
      <div className="main">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/elu' element={<EluPage />} />
          <Route path='/learn-more' element={<LearnMorePage />} />
          <Route path='/studying' element={<StudyingPage />} />
          <Route path='strategy/:id' element={<StrategyPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App

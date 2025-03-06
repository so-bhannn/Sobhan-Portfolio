import './App.css'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import { 
  Home,
  Blogs,
  About,
  Projects,
 } from './pages'

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
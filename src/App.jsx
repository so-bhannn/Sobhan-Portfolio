import './App.css'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import { 
  Home,
  Blogs,
  About
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
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/header/Navbar';
import Dashboard from './pages/1.dashboard/Dashboard';
import About from './pages/2.about/About';
import Contact from './pages/3.contact/Contact';
import Messages from './pages/4.messages/Messages';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/messages' element={<Messages/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App

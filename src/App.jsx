import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home, About, Contact } from './pages';
import Navbar from './components/Navbar';
import PageBottom from './components/PageBottom';

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
      <div className='absolute bottom-28 left-0 right-0 z-10 flex items-center justify-center'>
        <PageBottom />
      </div>
    </main>
  )
}

export default App
import './App.css';
import Header from './assets/Header';
import Footer from './assets/Footer';
import Index from './pages/index'
import Why from './pages/why'
import Trainers from './pages/trainers'
import Contact from './pages/contact'
import { 
  BrowserRouter,
  Routes, 
  Route } from "react-router-dom";

function App() {
  return (<>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/why" element={<Why/>} />
        <Route path="/trainers" element={<Trainers/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </> );
}

export default App;

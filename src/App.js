import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Routes>
<Route
path='/home' element={<Home/>}
/>
<Route
path='/portfolio' element={<Portfolio/>}
/>
<Route
path='/contact' element={<Contact/>}
/>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;

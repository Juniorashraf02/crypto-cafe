import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Coins from './Components/Coins/Coins';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import CoinDetails from './Components/CoinDetails/CoinDetails';
import NotFound from './Components/NotFound/NotFound';
import BdAddress from './Components/Contact/BdAddress';
import USAddress from './Components/Contact/USAddress';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins/>}></Route>
        <Route path="/coin-details/:id" element={<CoinDetails/>}></Route>
        <Route path="/contact" element={<Contact />}>
          <Route path="/contact/bd" element={<BdAddress></BdAddress>} />
          <Route path="/contact/US" element={<USAddress/>} />
        </Route>
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

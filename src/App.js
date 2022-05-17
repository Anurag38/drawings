import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Prints from "./Pages/Prints/Prints"
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/contact" element={<Contact />} />            
        </Routes>
      </Router>
    </div>
  );
}

export default App;

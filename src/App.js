import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

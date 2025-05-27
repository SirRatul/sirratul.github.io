import './assets/scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

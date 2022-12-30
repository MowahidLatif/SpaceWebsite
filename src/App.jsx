// import styles from './Styles/App.module.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Home from "./Components/Home";
import Mercury from "./Components/Mercury";
import Venus from "./Components/Venus";
import Earth from "./Components/Earth";
import Mars from "./Components/Mars";
import Jupiter from "./Components/Jupiter";
import Saturn from "./Components/Saturn";
import Uranus from "./Components/Uranus";
import Neptune from "./Components/Neptune";
import Pluto from "./Components/Pluto";
import MainNav from "./Components/MainNav";
import PlanetNav from "./Components/PlanetNav";

function App() {
  return (
    <div>
      <h1>HELLO TO MY PLANET WEBSITE YOU PAGAN!</h1>
      <Router>
        <MainNav />
        <PlanetNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="mercury" element={<Mercury />} />
          <Route path="venus" element={<Venus />} />
          <Route path="earth" element={<Earth />} />
          <Route path="mars" element={<Mars />} />
          <Route path="jupiter" element={<Jupiter />} />
          <Route path="saturn" element={<Saturn />} />
          <Route path="uranus" element={<Uranus />} />
          <Route path="neptune" element={<Neptune />} />
          <Route path="pluto" element={<Pluto />} />
        </Routes>
      </Router>
    </div>
  );
}
// ADD EXO PLANETS DOWN THE ROAD
export default App;

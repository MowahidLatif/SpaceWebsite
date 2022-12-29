// import styles from './Styles/App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact"
import About from "./Components/About"
import Nav from "./Components/Nav"
import Blogs from "./Components/Blogs"
import Home from "./Components/Home"

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

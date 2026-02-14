import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles/main.css";

function App() {
const buttons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

let material = 'all';
let style = 'all';

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.dataset.filter;
        const value = btn.dataset.value;

        buttons.forEach(b => b.classList.remove('active'));                      
        btn.classList.add('active');


        if (type === 'material') material = value;
        if (type === 'style') style = value;

        products.forEach(p => {
            const m = p.dataset.material;
            const s = p.dataset.style;

            const show =
                (material === 'all' || m === material) &&
                (style === 'all' || s === style);

            p.style.display = show ? 'block' : 'none';
        });
    });
});
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

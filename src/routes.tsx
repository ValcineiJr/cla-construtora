import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Enterprises } from "./pages/Enterprises";
import { Contact } from "./pages/Contact";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/empreendimentos" element={<Enterprises />} />
        <Route path="/faleconosco" element={<Contact />} />
      </Routes>
    </Router>
  );
}

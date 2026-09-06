import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import CarDetails from "./Pages/CarDetails";
import Favorites from "./Pages/Favorites";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";

import Services from "./Pages/Services/Services";
import Restoration from "./Pages/Services/Restoration";
import Inspection from "./Pages/Services/Inspection";
import Consultation from "./Pages/Services/Consultation";

import ManageCars from "./Pages/Admin/ManageCars";
import ArchiveApi from "./Pages/Admin/ArchiveApi";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:id" element={<CarDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/services" element={<Services />}>
            <Route path="restoration" element={<Restoration />} />
            <Route path="inspection" element={<Inspection />} />
            <Route path="consultation" element={<Consultation />} />
          </Route>

        <Route
            path="/admin/cars"
            element={<ManageCars />}
        />
          <Route
             path="/admin/archive-api"
             element={<ArchiveApi />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
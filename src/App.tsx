import React, { useState } from "react";
import SideBarNav from "./components/SideBarNav";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ManageCatalogue from "./pages/ManageCatalogue";
import Graphql from "./pages/Graphql";
import Genres from "./pages/Genres";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Router>
        <div className="flex">
          <SideBarNav open={open} setOpen={setOpen} />
          <div className="flex flex-1">
            <NavigationBar />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/genres" element={<Genres />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/manage-catalogue" element={<ManageCatalogue />} />
                <Route path="/add-movie" element={<AddMovie />} />
                <Route path="/graphql" element={<Graphql />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;

import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CharacterGallery from "./Pages/CharacterGallery.jsx";
import Navigation from "./Components/Navigation.jsx";
import Home from "./Pages/Home.jsx";
import NoMatch from "./Components/NoMatch.jsx";
import CharacterPage from "./Pages/CharacterPage";
import WeaponsGallery from "./Pages/WeaponsGallery.jsx";
import WeaponPage from "./Pages/WeaponPage.jsx";

function App() {
  return (
    <>
      <main>
        <div className="title-heading">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Valorant_pink_version_logo.svg/1280px-Valorant_pink_version_logo.svg.png"
              alt="valorant title"
              className="title-img"
            />
          </Link>
        </div>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/characters" Component={CharacterGallery} />
          <Route path="/characters/:uuid" element={<CharacterPage />} />
          <Route path="/weapons" Component={WeaponsGallery} />
          <Route path="/weapons/:uuid" element={<WeaponPage />} />
          <Route path="*" Component={NoMatch} />
        </Routes>
      </main>
    </>
  );
}

export default App;

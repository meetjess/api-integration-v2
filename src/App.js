import "./styles.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navigation from "./components/navigation";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

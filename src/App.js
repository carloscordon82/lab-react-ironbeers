import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import AddBeer from "./components/AddBeer";
import RandomBeer from "./components/RandomBeer";
import BeerInfo from "./components/BeerInfo";
import Home from "./components/Home";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <header className="top">
        <Link to="/">
          <Button variant="contained">HOME</Button>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<BeerInfo random="true" />} />
        <Route path="/add-beer" element={<AddBeer />} />
        <Route path="/beers/:beerId" element={<BeerInfo />} />
      </Routes>{" "}
    </div>
  );
}

export default App;

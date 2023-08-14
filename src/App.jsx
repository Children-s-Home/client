import { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";

// Page imports
import LogIn from "./Components/LogIn/LogIn"
import Register from "./Components/Register/Register"
import Home from "./Components/Home/Home"
import AboutUs from "./Components/AboutUs/AboutUs"
import Article from "./Components/Article/Article"
import Blog from "./Components/Blog/Blog";
import ChildrenHomeIndividual from "./Components/ChildrenHomeIndividual/ChildrenHomeIndividual";
import DonationVolunteeringFundraising from "./Components/DonationVolunteeringFundraising/DonationVolunteeringFundraising";
import SearchResults from "./Components/SearchResults/SearchResults";


import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  return (
    <div className="App">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Article" element={<Article />} />
        <Route
          path="/ChildrenHomeIndividual"
          element={<ChildrenHomeIndividual />}
        />
        <Route path="/Blog" element={<Blog />} />
        <Route
          path="/DonationVolunteeringFundraising"
          element={<DonationVolunteeringFundraising />}
        />
        <Route path="/SearchResults" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App

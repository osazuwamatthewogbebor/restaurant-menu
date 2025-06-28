import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Drinks from './pages/Drinks';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Food from './pages/Food';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/food-menu' element={ <Food />} />
        <Route path='/drink-menu' element={ <Drinks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

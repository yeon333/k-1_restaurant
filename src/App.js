//import logo from './logo.svg';

import React, { useEffect, useState ,Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Mainguest from './Mainguest';
//import './Map';


function App() {
   
  

  return (
    
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainguest />} />
          

        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

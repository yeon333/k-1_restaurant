//import logo from './logo.svg';

import React, { useEffect, useState ,Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./View/Login";
import Signup from "./View/Signup";
import Mainguest from './Mainguest';

import { authService } from "./firebase";


function App() {
   
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null); //
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setIsLoggedIn(true);
        setUserObj(user); 
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  

  return (
    
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {init? (isLoggedIn ? (
            <>
              <Route path="/" element={<Mainguest user = {userObj} />} />
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )) : (
            ""
          )

          }
          
          <Route path="/" element={<Login />} />
          
          <Route path="/mainguest" element={<Mainguest />} />
          <Route path="/signup" element = {<Signup />}/>
          

        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

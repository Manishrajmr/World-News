import React from 'react';
import {Demo} from './pages/hero';
import Header from './components/header';
import { AuthUI } from './pages/auth-ui';
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import Home from './pages/Home';



const App : React.FC = () => {
  return (
    <div>

       <BrowserRouter>  

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth-ui" element={<AuthUI />} />
  
        </Routes>
    </BrowserRouter>

      
    </div>
  );
}

export default App;

import Layout from './Components/Layout.jsx';
import Home from './Components/Home.jsx';
import Cart from './Components/Cart.jsx';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { useState,useEffect } from 'react';
import './App.css';



function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
        // Appeler l'API backend en PHP
        fetch('http://localhost/backend/backend-piwee/api.php')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Erreur :', error));
    }, []);                                                                                                                                                               
  return (
    <>
    <BrowserRouter>
      
        {/* Routes pour la navigation */}
        <Routes>
          <Route path="/" element={<Layout />}> {/*Layout n'est pas une balise orpheline: il permet ici deglober des routes dans des routes , et ainsi de creer un contenu qui va s'afficher peut importe la page afficher, tres utile pour le header et le footer*/}
            <Route path="/" element={<Home />} />
            <Route path='/cart' element={<Cart />}></Route>
            
          </Route>
        </Routes>

        
    </BrowserRouter>
    </>
  )
}

export default App;


import Connexion from './Components/Connexion.jsx';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import Logged from './Components/Logged.jsx';
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
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App;


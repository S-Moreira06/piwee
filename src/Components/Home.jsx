import Hero from './Hero.jsx';
import { useState,useEffect } from 'react';
import '../assets/home.css';

function Home () {
    const [data, setData] = useState([]);
    
        useEffect(() => {
            // Appeler l'API backend en PHP
            fetch('http://localhost/backend/backend-piwee/products.php')
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error) => console.error('Erreur :', error));
        }, []);
        const products = data.map((product) =>
            <li key={product.id}>
                <a href="">
                    <p>{product.name}</p>
                    <img src={`/img/${product.image}`} alt={product.name} className='caroussel-item-img'/>
                    <p>{product.price}</p>
                </a>
            </li>
    );
    return (
        <>
            <div>
                <Hero/>
                <ul className='caroussel'>{products}</ul>
            </div>
        </>
    )
}

export default Home
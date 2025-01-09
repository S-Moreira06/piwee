import Hero from './Hero.jsx';
import { useState,useEffect } from 'react';

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
            <li key={product.id}>{product.name}</li>
    );
    return (
        <>
            <div>
                <Hero/>
                <img src="/img/2BZYfYkT5Zf0RrR4JmfY4.jpg" alt="" />
                <ul>{products}</ul>
            </div>
        </>
    )
}

export default Home
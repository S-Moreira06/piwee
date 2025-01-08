import { useState,useEffect } from 'react';

function Connexion() {
    const [name, setName] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

    try {
        // Envoie les données au backend
        const response = await fetch('http://localhost/backend/backend-piwee/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Connexion réussie ! Bienvenue.');
            // Redirige ou gère l'utilisateur connecté
        } else {
            setError(data.error || 'Erreur de connexion.');
        }
    } catch (err) {
        setError('Erreur de connexion au serveur.');
    }}


    return (
        <>
            <div>
                <form>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} required/>
                    <input type="submit" value="" />
                </form>
            </div>
        </>
    )}


export default Connexion;


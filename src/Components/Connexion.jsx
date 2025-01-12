import { useState } from 'react';

function Connexion() {
    const [name, setName] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        setError(null); // réinitialise les erreurs
        try {
            // Envoie les données au backend
            const response = await fetch('http://localhost/backend/backend-piwee/connexion.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });

            const data = await response.json();
            if (!response.ok || !data.success) {
                throw new Error('Connexion échouée. Vérifiez vos identifiants.');
            }

            alert('Connexion réussie ! Bienvenue.');

        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Nom:</label>
                    <input 
                        type='text' 
                        id='name' 
                        placeholder="Votre nom" 
                        onChange={(e) => setName(e.target.value)} 
                        value={name} 
                        required
                    />
                    <input type='submit' value='Connexion' />
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </>
    );
}


export default Connexion;


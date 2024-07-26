import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const namePattern = /^[a-zA-Z\s]+$/;

        if (name.length < 3) {
            setError('El nombre debe tener al menos 3 caracteres.');
            return;
        } else if (!namePattern.test(name)) {
            setError('El nombre solo debe contener letras y espacios.');
            return;
        } else if (!emailPattern.test(email)) {
            setError('El correo electrónico no es válido.');
            return;
        }
        
        const contactData = { name, email };
        localStorage.setItem('contact', JSON.stringify(contactData));
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <div>
                <label>Correo electrónico:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Contact;

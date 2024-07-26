import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Reserve = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const namePattern = /^[a-zA-Z\s]+$/;
        const selectedDate = new Date(date);
        const currentDate = new Date();

        if (name.length < 3) {
            setError('El nombre debe tener al menos 3 caracteres.');
            return;
        } else if (!namePattern.test(name)) {
            setError('El nombre solo debe contener letras y espacios.');
            return;
        } else if (selectedDate < currentDate) {
            setError('La fecha de reserva no puede ser anterior a la fecha actual.');
            return;
        }

        const reserveData = { name, date };
        localStorage.setItem('reserve', JSON.stringify(reserveData));
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
                <label>Día de la reserva:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Reservar</button>
        </form>
    );
};

export default Reserve;

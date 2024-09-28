import React, { useState } from 'react';
import InputField from '../components/InputField';
import RegisterButton from '../components/RegisterButton';
import '../styles/Registration.css';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const handleRegister = () => {
        if (!username || !password || !confirmPassword) {
            setError('Все поля должны быть заполнены');
            return;
        }

        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        const userExists = users.some(user => user.username === username);

        if (userExists) {
            setError('Пользователь с таким именем уже существует');
            return;
        }

        setUsers([...users, { username, password }]);
        setError('Регистрация успешна');
    };

    return (
        <div className="registration-container">
            <h1>Регистрация</h1>
            <InputField type="text" placeholder="Имя пользователя" value={username} onChange={setUsername} />
            <InputField type="password" placeholder="Пароль" value={password} onChange={setPassword} />
            <InputField type="password" placeholder="Повторите пароль" value={confirmPassword} onChange={setConfirmPassword} />
            <RegisterButton onClick={handleRegister} />
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default RegistrationPage;

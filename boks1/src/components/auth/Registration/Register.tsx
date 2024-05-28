import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../../firebase/firebaseConfig';
import styles from './Register.module.scss';

const Register: React.FC = () => {
  // Локальные состояния для email, пароля и сообщения об ошибке
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Обработчик формы регистрации
  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
    setError(null); // Сбрасываем сообщение об ошибке перед началом регистрации
    try {
      // Регистрация с использованием email и пароля через Firebase Auth
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Перенаправляем пользователя на главную страницу после успешной регистрации
    } catch (error: any) {
      console.error('Ошибка при регистрации:', error); // Выводим ошибку в консоль, если регистрация не удалась
      setError(
        'Не удалось выполнить регистрацию. Пожалуйста, проверьте введенные данные и попробуйте снова.',
      ); // Устанавливаем сообщение об ошибке для отображения пользователю
    }
  };

  return (
    <div className={styles.register}>
      <form onSubmit={handleRegister} className={styles.form}>
        <h2>Регистрация</h2>
        {error && <p className={styles.error}>{error}</p>}{' '}
        {/* Отображение сообщения об ошибке, если оно есть */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Зарегистрироваться
        </button>
      </form>
      <p>
        Уже есть аккаунт?{' '}
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </p>
    </div>
  );
};

export default Register;

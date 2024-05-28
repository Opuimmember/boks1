import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, googleProvider } from '../../../firebase/firebaseConfig';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  // Локальные состояния для email, пароля и сообщения об ошибке
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Обработчик формы входа
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
    setError(null); // Сбрасываем сообщение об ошибке перед началом входа
    try {
      // Вход с использованием email и пароля через Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Перенаправляем пользователя на главную страницу после успешного входа
    } catch (error: any) {
      console.error('Ошибка при входе:', error); // Выводим ошибку в консоль, если вход не удался
      setError('Не удалось выполнить вход. Пожалуйста, проверьте email и пароль.'); // Устанавливаем сообщение об ошибке для отображения пользователю
    }
  };

  // Обработчик входа через Google
  const handleGoogleLogin = async () => {
    setError(null); // Сбрасываем сообщение об ошибке перед началом входа
    try {
      // Вход с использованием Google через Firebase Auth
      await signInWithPopup(auth, googleProvider);
      navigate('/'); // Перенаправляем пользователя на главную страницу после успешного входа
    } catch (error: any) {
      console.error('Ошибка при входе через Google:', error); // Выводим ошибку в консоль, если вход не удался
      setError('Не удалось выполнить вход через Google. Попробуйте снова.'); // Устанавливаем сообщение об ошибке для отображения пользователю
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2>Вход</h2>
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
          Войти
        </button>
      </form>
      <button onClick={handleGoogleLogin} className={styles.googleButton}>
        Войти через Google
      </button>
      <p>
        Нет аккаунта?{' '}
        <Link to="/register" className={styles.link}>
          Зарегистрироваться
        </Link>
      </p>
    </div>
  );
};

export default Login;

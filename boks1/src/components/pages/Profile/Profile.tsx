import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import styles from './Profile.module.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

// Компонент `Profile` отвечает за отображение страницы профиля пользователя
const Profile: React.FC = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  // Обработчик сброса пароля
  const handlePasswordReset = async () => {
    if (user && user.email) {
      try {
        await sendPasswordResetEmail(auth, user.email);
        alert('Письмо для сброса пароля отправлено!');
      } catch (error) {
        console.error('Ошибка при отправке письма для сброса пароля:', error);
      }
    }
  };

  // Обработчик выхода из аккаунта
  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login');
    });
  };

  return (
    <>
      <Header />
      <div className={styles.profile}>
        <main className={styles.main}>
          <h1>Профиль</h1>
          {user && (
            <div className={styles.userInfo}>
              <p>Email: {user.email}</p>
              <button onClick={handlePasswordReset} className={styles.button1}>
                Сбросить пароль
              </button>
              <button onClick={handleLogout} className={styles.button}>
                Выйти
              </button>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
